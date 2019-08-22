import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Components
import AudioControls from './AudioControls';

// Packages
// import { Player } from 'react-native-audio-player-recorder-no-linking';
// import { Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

// Redux
import { connect } from 'react-redux';

// Constants
import { height, width } from '../../constants/Layout';

// Assets
import art from '../../assets/images/cloud-splash.jpg';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    };
  }

  render() {
    let title = 'Our one song';
    let { favorite } = this.state;
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
          <TouchableOpacity onPress={() => this.setState({ favorite: !favorite })}>{heart}</TouchableOpacity>
        </View>
        <AudioControls />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 10,
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

const mapStateToProps = state => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(mapStateToProps)(AudioPlayer);
