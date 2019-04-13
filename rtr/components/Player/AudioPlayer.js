import React, { Component } from 'react';
import { View } from 'react-native';
import { Player } from 'react-native-audio-player-recorder-no-linking';
import Slider from '@react-native-community/slider';


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
          style={{ flex: 1 }}
          onComplete={() => console.log("finished")}
          completeButtonText={'Return Home'}
          uri={'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}
          showDebug={true}
          showBackButton={true}
          playbackSlider={(renderProps) => {
            return (
            <Slider
                minimimValue={0}
                maximumValue={renderProps.maximumValue}
                onValueChange={renderProps.onSliderValueChange}
                value={renderProps.value}
                style={{
                width: '100%'
                }}
            />
            );
        }}
/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};