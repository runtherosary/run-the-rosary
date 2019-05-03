import React from 'react';
import {Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../constants/Layout';
import {Button} from 'react-native-elements';
import homescreen from '../assets/images/homescreen.jpeg';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Title from '../components/Title';
import Animation from 'lottie-react-native';
import title from '../assets/animations/titleAnim.json';
import rosary from '../assets/images/rosary.png';
import pray from '../assets/images/praying-hands.png';
import today from '../assets/images/login-background.jpg';

import Footer from '../components/Footer/Footer';

export default class HomeScreen extends React.Component {
  state = {screen: 'Home'};
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.animation.play(0, 164);
    this.animationb.play(145, 164);
  }

  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const {screen} = this.state;
    const icon1 = <Icon name='linkedin' size={60} color='white' />;
    const play = (
      <Animation
        ref={(animation) => {
          this.animation = animation;
        }}
        loop={false}
        source={title}
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
    const todaysRosary = <Text>TODAY'S PRAYER</Text>;

    const rosaryBeads = <Image source={rosary} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;
    const prayerHands = <Image source={pray} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;

    return (
      <ImageBackground source={homescreen} style={{flex: 1, opacity: 0.85}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{paddingLeft: 30}}
            onPress={() => {
              this.route('Home');
            }}>
            <Icon name='menu' size={30} color='#fff' />
          </TouchableOpacity>
          <Text>Run the Rosary</Text>
          <TouchableOpacity
            style={{paddingRight: 30}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
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
              <Button
                title={todaysRosary}
                titleStyle={styles.todayText}
                onPress={() => this.route('RosaryList')}
                buttonStyle={styles.todayButton}
              />
              <Button
                icon={play}
                onPress={() => this.route('PrayerPlayer')}
                buttonStyle={[styles.playButton, {backgroundColor: 'transparent'}]}
              />
              <Button
                title='ROSARIES'
                titleStyle={styles.buttonText}
                icon={<Image source={rosary} style={{height: 80, width: 80}} />}
                onPress={() => this.route('RosaryList')}
                buttonStyle={styles.prayerButton}
              />
              <Button
                title='PRAYERS'
                titleStyle={styles.buttonText}
                icon={<Image source={pray} style={{height: 80, width: 80}} />}
                onPress={() => this.route('PrayerList')}
                buttonStyle={styles.prayerButton}
              />
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: 'black',
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
    backgroundColor: 'transparent',
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.blue,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    borderColor: colors.blue,
    borderWidth: 1,
    height: 230,
    width: 270,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  prayerButton: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.blue,
    shadowOpacity: 0.9,
    shadowRadius: 3,
    opacity: 0.8,
    backgroundColor: colors.blue,
    height: 225,
    width: 180,
    margin: 10,
    borderRadius: 5,
  },
  todayButton: {
    opacity: 0.6,
    backgroundColor: colors.darkgray,
    height: 150,
    width: 375,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 20,
    opacity: 0.9,
    letterSpacing: 6,
  },
  todayText: {
    fontSize: 12,
    fontWeight: 'bold',
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
    color: 'black',
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
