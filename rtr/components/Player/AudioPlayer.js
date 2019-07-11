import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Player} from 'react-native-audio-player-recorder-no-linking';
import {Slider} from 'react-native-elements';
import art from '../../assets/images/cloud-splash.jpg';
import {height, width} from '../../constants/Layout';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: true,
      shuffleOn: false,
      favorite: false,
    };
  }

  handleEndOfAudio = () => {
    console.log('HIT HANDLE VALUE CHANGE');
    let {currentPosition, repeatOn} = this.state;
    if (
      repeatOn &&
      currentPosition >
        [{title: 'TEST SONG TITLE', url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}].length - 1
    ) {
      this.setState({currentPosition: currentPosition});
    } else if (repeatOn) {
      this.setState({currentPosition: 0});
    }
  };

  render() {
    let {url, title} = [{title: 'Our one song', url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}][
      this.state.currentPosition
    ];
    let {favorite} = this.state;
    let a = 'heart-outlined';
    let b = 'heart';

    const heart = <Icon name={favorite ? b : a} color='white' style={styles.favorite} size={30} />;

    console.log('Prayers: ', this.props.prayers);

    return (
      <View style={styles.container}>
        <Text style={styles.playingFrom}>Playing from Prayers</Text>
        <Image source={art} style={styles.art} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title ? title : 'Some test title'}</Text>
          <TouchableOpacity onPress={() => this.setState({favorite: !favorite})}>{heart}</TouchableOpacity>
        </View>
        <Player
          style={{flex: 1}}
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
                style={{width: width - 50}}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  playingFrom: {
    color: 'white',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 15,
  },
  art: {
    height: width - 75,
    width: width - 75,
  },
  titleContainer: {
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  favorite: {},
};

const mapStateToProps = (state) => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(mapStateToProps)(AudioPlayer);
