import React from 'react';
import {Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../constants/Layout';
import {Button} from 'react-native-elements';
import homescreen from '../assets/images/homescreen.jpeg';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Animation from 'lottie-react-native';
import title from '../assets/animations/titleAnim.json';
import rosary from '../assets/images/rosary.png';
import pray from '../assets/images/praying-hands.png';

export default class HomeScreen extends React.Component {
  state = {
    screen: 'Home',
    today: '',
  };
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.animation.play(0, 164);
    this.animationb.play(145, 164);
    let month = new Date().toLocaleString('en-us', {month: 'long'});
    let weekday = new Date().toLocaleString('en-us', {weekday: 'long'});
    let day = new Date().getDate();
    this.setState({
      today: `${weekday}, ${month} ${day + this.getDaySuperscript(day)}, ${new Date().getFullYear()}`,
    });
  }

  route = (path) => {
    this.props.navigation.navigate(path);
  };

  getDaySuperscript = (day) => {
    if (day > 3 && day < 21) {
      return 'th';
    }
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  render() {
    const {screen, today} = this.state;
    const icon1 = <Icon name='linkedin' size={60} color={colors.white} />;
    const arrowRightSmall = <Icon name='arrow-right' size={22} color={colors.white} />;
    const arrowRight = <Icon name='arrow-right' size={25} color={colors.white} style={{marginBottom: 15}} />;
    const play = (
      <Animation
        ref={(animation) => {
          this.animation = animation;
        }}
        loop={false}
        source={title}
        style={{marginLeft: 3, marginTop: 1}}
      />
    );
    const playRoute = (
      <Animation
        ref={(animation) => {
          this.animationb = animation;
        }}
        loop={false}
        source={title}
        style={styles.playIcon}
      />
    );
    const rosaryBeads = <Image source={rosary} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;
    const prayerHands = <Image source={pray} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;
    const prayer = <Image source={pray} style={{height: 100, width: 100}} />;
    const rosaryLink = <Image source={rosary} style={{height: 100, width: 100}} />;

    return (
      <ImageBackground source={homescreen} style={{flex: 1, opacity: 0.85}}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{paddingLeft: 30}}
            onPress={() => {
              this.route('Home');
            }}>
            {/* Slide out menu from the hamburger menu for profile, help, rating the app, FAQs, etc */}
            <Icon name='menu' size={30} color='#fff' />
          </TouchableOpacity>
          <Text style={{color: colors.white, fontSize: 20}}>Home</Text>
          <TouchableOpacity
            style={{paddingRight: 30}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>

        {/* BODY */}
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              {/* TODAY'S ROSARY */}
              <TouchableOpacity onPress={() => this.route('RosaryList')} style={styles.todayOpacity}>
                <View style={styles.todayText}>
                  <Text style={styles.todayText}>Today's Rosary</Text>
                </View>
                <Text style={styles.todayDate}>
                  {today} {arrowRightSmall}
                </Text>
              </TouchableOpacity>

              {/* PLAY BUTTON */}
              <Button icon={play} onPress={() => this.route('PrayerPlayer')} buttonStyle={styles.playButton} />

              {/* ROSARY & PRAYER BUTTONS */}
              <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
                {/* ROSARIES */}
                <TouchableOpacity onPress={() => this.route('RosaryList')} style={styles.prayerButton}>
                  <View style={styles.prayerText}>
                    <Text style={styles.prayerTex}>Rosaries</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{rosaryLink}</Text>
                    <Text style={styles.buttonText}>{arrowRight}</Text>
                  </View>
                </TouchableOpacity>

                {/* PRAYERS */}
                <TouchableOpacity onPress={() => this.route('PrayerList')} style={styles.prayerButton}>
                  <View style={styles.prayerText}>
                    <Text style={styles.prayerTex}>Prayers</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{prayer}</Text>
                    <Text style={styles.buttonText}>{arrowRight}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.route('Home');
            }}
            style={styles.iconContainer}>
            <Icon2 name='home' size={22} color='#D4D2D2' style={[styles.navIcon, {marginTop: 4}]} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('RosaryList');
            }}
            style={styles.iconContainer}>
            {rosaryBeads}
            <Text style={styles.navText}>Rosaries</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerList');
            }}
            style={styles.iconContainer}>
            {prayerHands}
            <Text style={styles.navText}>Prayers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerPlayer');
            }}
            style={styles.iconContainer}>
            {playRoute}
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.darkgray,
    width,
    height: height / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
  },
  home: {
    margin: 20,
  },
  playButton: {
    backgroundColor: colors.invisiBlue,
    shadowOffset: {width: 0, height: 8},
    shadowColor: colors.blue,
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 17,
    height: 275,
    width: 275,
    borderRadius: 140,
    borderColor: colors.blue,
    borderWidth: 1,
    margin: 30,
  },
  prayerButton: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginHorizontal: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prayerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 3,
    borderColor: colors.transBlue,
  },
  prayerTex: {
    fontSize: 20,
    paddingBottom: 10,
    color: colors.blue,
  },
  todayOpacity: {
    marginTop: 35,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    marginBottom: 5,
    color: colors.blue,
    borderBottomWidth: 3,
    borderColor: colors.transBlue,
  },
  todayDate: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 27,
  },
  footerContainer: {
    backgroundColor: colors.darkgray,
    opacity: 0.8,
    width,
    height: height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
  },
  navText: {
    fontSize: 9,
    color: colors.white,
    fontWeight: 'bold',
    opacity: 0.8,
    justifyContent: 'center',
  },
  playIcon: {
    height: 30,
    width: 40,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.blue,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  playText: {
    fontSize: 9,
    color: colors.blue,
    opacity: 0.8,
    justifyContent: 'center',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: colors.blue,
    textShadowRadius: 10,
  },
});
