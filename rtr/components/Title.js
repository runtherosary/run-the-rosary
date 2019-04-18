import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {width} from '../constants/Layout';
import Animation from 'lottie-react-native';
import title from '../assets/animations/titleAnim.json';

export default class Title extends React.Component {
  componentDidMount() {
    this.animation.play(0, 164);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Run the Rosary</Text>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={{height: 120, padding: 0, marginRight: 40}}
          loop={false}
          source={title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    height: 100,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    textShadowColor: 'gray',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    marginLeft: 100,
    paddingTop: 30,
  },
});
