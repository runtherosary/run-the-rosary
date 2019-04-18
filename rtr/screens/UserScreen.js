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

import Footer from '../components/Footer/Footer';

export default class UserScreen extends React.Component {
  state = {screen: 'Home'};
  static navigationOptions = {
    header: null,
  };

  //   componentDidMount() {
  //     this.animation.play();
  //   }

  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const {screen} = this.state;
    const icon1 = <Icon name='linkedin' size={60} color='white' />;

    return (
      <ImageBackground source={homescreen} style={{flex: 1, opacity: 0.85}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{paddingLeft: 20}}
            onPress={() => {
              this.route('Home');
            }}>
            <Icon name='menu' size={30} color='#fff' />
          </TouchableOpacity>
          <Text>Run the Rosary</Text>
          <TouchableOpacity
            style={{paddingRight: 20}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        {/* <Title /> */}
        <ScrollView>
          <Text style={{color: '#fff'}}>User Profile</Text>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.route('Home');
            }}>
            <Icon2 name='home' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('RosaryList');
            }}>
            <Icon2 name='book' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerList');
            }}>
            <Icon2 name='plus' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerPlayer');
            }}>
            <Icon2 name='play' size={30} color='#fff' />
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
    opacity: 0.8,
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
  mdButton: {
    opacity: 0.8,
    backgroundColor: colors.blue,
    height: 130,
    width: 180,
    margin: 10,
  },
  lgButton: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    opacity: 0.8,
    backgroundColor: colors.blue,
    height: 225,
    width: 180,
    margin: 10,
  },
  xlgButton: {
    opacity: 0.8,
    backgroundColor: colors.blue,
    height: 180,
    width: 375,
    margin: 10,
  },
  buttonText: {
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
});
