import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {height, width} from '../../constants/Layout';
import colors from '../../constants/Colors';
import AudioPlayer from '../../components/Player/AudioPlayer';
import {connect} from 'react-redux';
import {selectPrayer} from '../../ducks/reducers/prayerReducer';
import background from '../../assets/images/login-background.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Animation from 'lottie-react-native';
import rosary from '../../assets/images/rosary.png';
import pray from '../../assets/images/praying-hands.png';
import title from '../../assets/animations/titleAnim.json';

class PrayerPlayer extends React.Component {
  state = {
    prayerList: [],
    selected: false,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    this.animationb.play(145, 164);
  };

  render() {
    const {prayers} = this.props;
    const back = <Icon2 name='arrowleft' size={30} color='#fff' />;
    const playPrayers = prayers
      ? prayers.filter(e => {
          if (e.selected) {
            return e;
          }
        })
      : null;
    const playRoute = (
      <Animation
        ref={animation => {
          this.animationb = animation;
        }}
        loop={false}
        source={title}
        style={styles.playIcon}
      />
    );
    const rosaryBeads = <Image source={rosary} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;
    const prayerHands = <Image source={pray} style={{height: 20, width: 20, marginBottom: 4, marginTop: 4}} />;

    return (
      <ImageBackground source={background} style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PrayerList')} style={styles.back}>
            {back}
          </TouchableOpacity>
          <Text style={styles.headerText}>Run the Rosary</Text>
          <TouchableOpacity
            style={{paddingRight: 30}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        <AudioPlayer prayers={playPrayers} />
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.route('Home');
            }}
            style={styles.iconContainer}>
            <Icon2 name='home' size={22} color='#D4D2D2' style={[styles.navIcon, {marginTop: 4}]} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('RosaryList');
            }}
            style={styles.iconContainer}>
            {rosaryBeads}
            <Text style={styles.navText}>Rosaries</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerList');
            }}
            style={styles.iconContainer}>
            {prayerHands}
            <Text style={styles.navText}>Prayers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerPlayer');
            }}
            style={styles.iconContainer}>
            {playRoute}
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.darkgray,
    width,
    height: height / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
    opacity: 0.9,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 4,
  },
  back: {
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
  footerContainer: {
    backgroundColor: colors.darkgray,
    opacity: 0.8,
    width,
    height: height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
  },
  navText: {
    fontSize: 9,
    color: 'black',
    opacity: 0.8,
    justifyContent: 'center',
  },
  playIcon: {
    height: 30,
    width: 40,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.blue,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  playText: {
    fontSize: 9,
    color: colors.blue,
    opacity: 0.8,
    justifyContent: 'center',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: colors.blue,
    textShadowRadius: 10,
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
