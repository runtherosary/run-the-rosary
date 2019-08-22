// TODO
// Pulse will probably give us probably down the line
// ANy creative ideas regarding the play button, & rosary/prayer buttons are welcome

import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Packages
import Animation from 'lottie-react-native';
import { Button } from 'react-native-elements';
import Pulse from 'react-native-pulse';

// Header & Footer
import Header from './Header';
import Footer from './Footer';

// Constants
import { width, height } from '../constants/Layout';
import colors from '../constants/Colors';

// Assets
import homescreen from '../assets/images/homescreen.jpeg';
import title from '../assets/animations/titleAnim.json';
import rosary from '../assets/images/rosary.png';
import pray from '../assets/images/praying-hands.png';

export default class HomeScreen extends React.Component {
  state = {
    screen: 'Home',
    today: '',
  };

  static navigationOptions = {
    navigationOptions: {
      header: null
    }
  };

  componentDidMount() {
    this.animation.play(0, 164);
    let month = new Date().toLocaleString('en-us', { month: 'long' });
    let weekday = new Date().toLocaleString('en-us', { weekday: 'long' });
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
    const { today } = this.state;
    const prayer = <Image source={pray} style={{ height: 100, width: 100 }} />;
    const rosaryLink = <Image source={rosary} style={{ height: 100, width: 100 }} />;

    const play = (
      <Animation
        ref={(animation) => {
          this.animation = animation;
        }}
        loop={false}
        source={title}
        style={{ marginLeft: 2, marginTop: 1 }}
      />
    );

    return (
      <ImageBackground
        source={homescreen}
        style={{ flex: 1, opacity: 0.85 }}>

        {/* HEADER */}
        <Header
          screen={this.state.screen}
          navigation={this.props.navigation}
        />

        {/* HOME BODY */}
        <ScrollView style={styles.scrollContainer}>
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
              <TouchableOpacity
                onPress={() => this.route('RosaryList')}
                style={styles.todayOpacity}>
                <View style={styles.todayText}>
                  <Text style={styles.todayText}>
                    Today's Rosary
                  </Text>
                </View>
                <Text style={styles.todayDate}>
                  {today}
                </Text>
              </TouchableOpacity>

              {/* PLAY BUTTON */}
              <View style={{ width, height: 300 }}>
                <Pulse
                  style={styles.pulse}
                  color={colors.transBlue}
                  speed={7}
                  numPulses={5}
                >
                </Pulse>
                <Button
                  title="START"
                  icon={play}
                  buttonStyle={styles.startButton}
                  titleStyle={styles.startButtonText}
                  onPress={() => this.route('PrayerPlayer')} />
              </View>

              {/* ROSARY & PRAYER BUTTONS */}
              <View
                style={styles.prayerButtonContainer}>

                {/* ROSARIES */}
                <TouchableOpacity
                  onPress={() => this.route('RosaryList')}
                  style={styles.prayerButton}>
                  <View style={styles.prayerText}>
                    <Text style={styles.prayerTextColor}>
                      Rosaries
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                      {rosaryLink}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* PRAYERS */}
                <TouchableOpacity
                  onPress={() => this.route('PrayerList')}
                  style={styles.prayerButton}>
                  <View style={styles.prayerText}>
                    <Text style={styles.prayerTextColor}>
                      Prayers
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                      {prayer}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* FOOTER */}
        <Footer navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: height / 9,
  },
  pulse: {},
  startButton: {
    position: "absolute",
    top: 65,
    right: 72,
    height: 272,
    width: 272,
    zIndex: 900,
    backgroundColor: colors.blue,
    borderRadius: 136,
  },
  startButtonText: {
    fontFamily: 'Baskerville',
    color: colors.white,
    fontSize: 48,
    marginRight: 2,
  },
  prayerButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  prayerButton: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 100,
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
    fontWeight: 'bold'
  },
  prayerTextColor: {
    fontFamily: 'Baskerville-Bold',
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 10,
    color: colors.blue,
  },
  todayOpacity: {
    backgroundColor: colors.transBlue,
    paddingVertical: 20,
    width: width - 50,
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayText: {
    fontFamily: 'Baskerville-Bold',
    fontSize: 18,
    fontWeight: '900',
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  todayDate: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: colors.white,
  },
  playIcon: {
    height: 30,
    width: 40,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.blue,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
