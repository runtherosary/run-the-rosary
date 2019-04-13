import React, { Component } from 'react';
import { View } from 'react-native';
import { Player } from 'react-native-audio-player-recorder-no-linking';
import { Slider } from 'react-native-elements'
import {height, width} from '../../constants/Layout'


export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }


  render() {
    return (
      <View style={styles.container}>
         <Player
          style={{ flex: 1, height: height/3 }}
          onComplete={() => console.log("finished")}
          completeButtonText={'Return Home'}
          uri={'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}
          showDebug={false}
          showBackButton={false}
          timeStampStyle={{
            color: '#C7C6C6',
            fontSize: 15,
            position: 'absolute',
            bottom: 5
            }}
          playbackSlider={(renderProps) => {
            return  <Slider
                minimimValue={0}
                maximumValue={renderProps.maximumValue}
                onSlidingComplete={renderProps.onValueChange}
                value={renderProps.value}
                style={{width: '100%'}}/>
            }}/>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1, 
    backgroundColor: 'black',
    minHeight: height,
    minWidth: width,
    paddingTop: height/1.5
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};