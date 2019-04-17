import React from 'react';
import {StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {height, width} from '../../constants/Layout';
import colors from '../../constants/Colors';
import AudioPlayer from '../../components/Player/AudioPlayer';
import {connect} from 'react-redux';
import {selectPrayer} from '../../ducks/reducers/prayerReducer';
import background from '../../assets/images/login-background.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

class PrayerPlayer extends React.Component {
  state = {
    prayerList: [],
    selected: false,
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const {prayers} = this.props;
    const back = <Icon name='arrowleft' size={30} color='#fff' />;
    const playPrayers = prayers
      ? prayers.filter(e => {
          if (e.selected) {
            return e;
          }
        })
      : null;

    return (
      <ImageBackground source={background} style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PrayerList')} style={styles.back}>
          {back}
        </TouchableOpacity>
        <AudioPlayer prayers={playPrayers} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  back: {
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
});

const mapStateToProps = state => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(
  mapStateToProps,
  {
    selectPrayer,
  },
)(PrayerPlayer);
