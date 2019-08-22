import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Packages
import { Player } from 'react-native-audio-player-recorder-no-linking';
import { Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

// Redux
import { connect } from 'react-redux';

// Constants
import { height, width } from '../../constants/Layout';
import colors from '../../constants/Colors';

class AudioControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      selectedTrack: 0,
      currentPosition: 0,
      paused: true,
      totalLength: 1,
      repeatOn: true,
      shuffleOn: false,
      favorite: false,
    }
  };

  handleEndOfAudio = () => {
    console.log('HIT HANDLE VALUE CHANGE');
    let { currentPosition, repeatOn } = this.state;
    if (
      repeatOn &&
      currentPosition >
      [{ url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3' }].length - 1
    ) {
      this.setState({ currentPosition: currentPosition });
    } else if (repeatOn) {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    let { url } = [{ url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3' }][
      this.state.currentPosition
    ];

    return (
      <Player
        style={{ flex: 1 }}
        onComplete={() => console.log('finished')}
        completeButtonText={'Return Home'}
        uri={url ? url : 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}
        handleEndOfAudio={this.handleEndOfAudio}
        showDebug={false}
        showBackButton={false}
        repeat={this.state.repeatOn}
        showTimeStamp={false}
        playbackSlider={(renderProps) => {
          return (
            <Slider
              minimumValue={0}
              maximumValue={renderProps.maximumValue}
              onSlidingComplete={renderProps.onValueChange}
              onValueChange={() => console.log('the value changed!')}
              value={renderProps.value}
              style={{ width: '90%' }}
            />
          );
        }}
      />
    )
  }
};

const mapStateToProps = state => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(mapStateToProps)(AudioControls);


      // <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      //   <Slider
      //     value={this.state.value}
      //     onValueChange={value => this.setState({ value })}
      //   />
      //   <Text>Value: {this.state.value}</Text>
      // </View>