import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Packages
import Animation from 'lottie-react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';

// Constants
import { height, width } from '../constants/Layout';
import colors from '../constants/Colors';

// Assets
import title from '../assets/animations/titleAnim.json';
import rosary from '../assets/images/rosary.png';
import pray from '../assets/images/praying-hands.png';

export default class Footer extends React.Component {

  // componentDidUpdate() {
  //   this.animation.play(145, 164);
  // }
  render() {
    const rosaryBeads = <Image source={rosary} style={{ height: 20, width: 20, marginBottom: 4, marginTop: 4 }} />;
    const prayerHands = <Image source={pray} style={{ height: 20, width: 20, marginBottom: 4, marginTop: 4 }} />;

    const playRoute = (
      <Animation
        ref={(animation) => {
          this.animation = animation;
        }}
        loop={false}
        source={title}
        style={styles.playIcon}
      />
    );

    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          style={styles.iconContainer}>
          <Icon2 name='home' size={22} color='#D4D2D2' style={[styles.navIcon, { marginTop: 4 }]} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('RosaryList');
          }}
          style={styles.iconContainer}>
          {rosaryBeads}
          <Text style={styles.navText}>Rosaries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PrayerList');
          }}
          style={styles.iconContainer}>
          {prayerHands}
          <Text style={styles.navText}>Prayers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PrayerPlayer');
          }}
          style={styles.playIconContainer}>
          {/* {playRoute} */}
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.darkgray,
    opacity: 0.8,
    width,
    height: height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    zIndex: 1000
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12
  },
  navText: {
    fontSize: 9,
    color: colors.white,
    fontWeight: 'bold',
    opacity: 0.8,
    justifyContent: 'center'
  },
  playIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    backgroundColor: 'blue',
    padding: 5
  },
  playText: {
    fontSize: 9,
    color: colors.blue,
    opacity: 0.8,
    justifyContent: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: colors.blue,
    textShadowRadius: 10,
  },
});
