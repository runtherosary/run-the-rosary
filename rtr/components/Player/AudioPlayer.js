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
    let {url, title} = [{title: 'Our one fucking song', url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}][
      this.state.currentPosition
    ];
    let {favorite} = this.state;
    let a = 'heart-outlined';
    let b = 'heart';

    const heart = <Icon name={favorite ? b : a} color='white' style={styles.favorite} size={30} />;

    console.log('Prayers: ', this.props.prayers);

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.playingFrom}>Playing from Prayers</Text>
        </View>
        <Image source={art} style={styles.art} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title ? title : 'Some test title'}</Text>
          <TouchableOpacity onPress={() => this.setState({favorite: !favorite})}>{heart}</TouchableOpacity>
        </View>
        <Player
          onComplete={() => console.log('finished')}
          completeButtonText={'Return Home'}
          uri={url ? url : 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'}
          handleEndOfAudio={this.handleEndOfAudio}
          showDebug={false}
          showBackButton={false}
          repeat={this.state.repeatOn}
          timeStampStyle={{
            color: 'white',
            fontSize: 15,
          }}
          playbackSlider={renderProps => {
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
    alignItems: 'center',
    margin: 50,
  },
  playingFrom: {
    color: 'white',
    fontSize: 12,
    marginBottom: 70,
  },
  art: {
    height: height / 2.5,
    width: width - 50,
    marginBottom: 80,
  },
  titleContainer: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 30,

    color: 'white',
    fontSize: 25,
    marginBottom: 40,
  },
  favorite: {
    marginRight: 25,
  },
};

const mapStateToProps = state => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(mapStateToProps)(AudioPlayer);
