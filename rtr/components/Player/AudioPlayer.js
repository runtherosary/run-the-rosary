import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
      repeatOn: true,
      shuffleOn: false,
    };
  }

  handleEndOfAudio = () => {
    console.log('HIT HANDLE VALUE CHANGE')
    let { currentPosition, repeatOn } = this.state
    if(repeatOn && currentPosition > [{title: "TEST SONG TITLE", url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}].length - 1){
      this.setState({currentPosition: currentPosition})
    }else if(repeatOn){
      this.setState({currentPosition: 0})
    }
  }

  render() {
    let { url, title } = [{title: "Our one fucking song", url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}][this.state.currentPosition]
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title ? title : "Some test title"}</Text>
         <Player
          onComplete={() => console.log("finished")}
          completeButtonText={'Return Home'}
          uri={url ? url : 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}
          handleEndOfAudio={this.handleEndOfAudio}
          showDebug={false}
          showBackButton={false}
          repeat={this.state.repeatOn}
          timeStampStyle={{
            color: '#C7C6C6',
            fontSize: 15,
            }}
          playbackSlider={(renderProps) => {
            return  <Slider
                minimumValue={0}
                maximumValue={renderProps.maximumValue}
                onSlidingComplete={renderProps.onValueChange}
                onValueChange={() => console.log("the value changed!")}
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
    paddingTop: height/1.5,
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    paddingBottom: 30
  }
};