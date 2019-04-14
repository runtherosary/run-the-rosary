import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {AsyncStorage} from 'react-native';
import {height, width} from '../constants/Layout';
import clouds from '../assets/images/cloud-splash.jpg';

import Animation from 'lottie-react-native';
import stopwatch from '../assets/animations/stopwatch.json';

export default class LoadingScreen extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount = async () => {
    let {isLoading} = this.state;
    const user = await AsyncStorage.getItem('user');

    if (user) {
      this.setState({isLoading: false});
    }

    this.animation.play();
    if (user) {
      setTimeout(() => {
        this.props.navigation.navigate('Home');
      }, !isLoading);
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('Splash');
      }, 5000);
    }
  };

  render() {
    return (
      <ImageBackground source={clouds} style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{width: 300, height: 300}}
            loop={true}
            source={stopwatch}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 70,
    marginTop: 70,
  },
});
