import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

// Packages
import Animation from 'lottie-react-native';
import { Button } from 'react-native-elements';

// Redux
import { connect } from 'react-redux';
import { selectPrayer } from '../../ducks/reducers/prayerReducer';

// Header & Footer
import Header from '../Header';
import Footer from '../Footer';

// Constants
import { height, width } from '../../constants/Layout';
import colors from '../../constants/Colors';

// Assets
import AudioPlayer from '../../components/Player/AudioPlayer';
import background from '../../assets/images/login-background.jpg';

class PrayerPlayer extends React.Component {
  state = {
    prayerList: [],
    selected: false,
    screen: 'Currently Playing'
  };

  static navigationOptions = {
    header: null,
  };

  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const { prayers } = this.props;
    const { screen } = this.state;
    const playPrayers = prayers
      ? prayers.filter((e) => {
        if (e.selected) {
          return e;
        }
      })
      : null;

    return (
      <ImageBackground
        source={background}
        style={styles.container}>

        {/* HEADER */}
        <Header
          screen={screen}
          navigation={this.props.navigation} />

        {/* AUDIO PLAYER */}
        <AudioPlayer prayers={playPrayers} />

        {/* FOOTER */}
        <Footer navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(mapStateToProps, {
  selectPrayer,
})(PrayerPlayer);
