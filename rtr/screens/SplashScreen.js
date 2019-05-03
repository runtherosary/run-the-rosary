import React from 'react';
import {StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';
import {height, width} from '../constants/Layout';
import background from '../assets/images/splash-background.jpg';
import greentrail from '../assets/images/greentrail.jpg';
import mountain from '../assets/images/mountain.jpg';

import colors from '../constants/Colors';
import {connect} from 'react-redux';
import {getAllUsers} from '../ducks/reducers/userReducer';
import Carousel from '../components/Carousel/Carousel';
import Animation from 'lottie-react-native';
import title from '../assets/animations/titleAnim.json';

class SplashScreen extends React.Component {
  state = {
    user: {},
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.animation.play(0, 164);
  }

  getStarted = () => {
    this.props.navigation.navigate('Home');
    // We'll need to add some logic to conditionally navigate based on if its a new user visiting or an existing user
  };

  render() {
    return (
      <ImageBackground source={mountain} style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{flex: 1, width, marginTop: 40}}>
            <Text style={styles.title}>Run the Rosary</Text>
          </View>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            loop={false}
            source={title}
            speed={0.7}
          />
          <View style={styles.register}>
            <Button
              title='Register'
              onPress={() => this.props.navigation.navigate('Login')}
              buttonStyle={{
                backgroundColor: colors.blue,
                marginVertical: 5,
                height: 50,
                width: width - 50,
              }}
              textStyle={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                letterSpacing: 2,
              }}
            />
            <Button
              title='Login'
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderColor: 'white',
                borderWidth: 1,
                marginVertical: 5,
                height: 50,
                width: width - 50,
              }}
              textStyle={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                letterSpacing: 2,
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  register: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 150,
    marginHorizontal: 50,
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    textShadowColor: 'gray',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    marginTop: 215,
    marginBottom: 40,
  },

  start: {
    fontSize: 45,
    color: colors.blue,
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    user: state.userReducer.users,
  };
};

export default connect(mapStateToProps, {getAllUsers})(SplashScreen);
