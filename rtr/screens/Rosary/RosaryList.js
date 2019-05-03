import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {width, height} from '../../constants/Layout';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Animation from 'lottie-react-native';
import title from '../../assets/animations/titleAnim.json';
import rosary from '../../assets/images/rosary.png';
import pray from '../../assets/images/praying-hands.png';
import background from '../../assets/images/login-background.jpg';
import {connect} from 'react-redux';
import {getPrayersByType, selectPrayer} from '../../ducks/reducers/prayerReducer';

class RosaryList extends React.Component {
  state = {
    rosaryList: [],
    selectedRosaryList: [],
    selected: 0,
    check: true,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    this.props.getPrayersByType('Rosary');
    this.animationb.play(145, 164);
  };

  done = () => {
    let {prayers} = this.props;
    let selected = [];
    for (var i = 0; i < prayers.length; i++) {
      if (prayers[i].selected) {
        selected.push(prayers[i]);
      }
    }
    this.setState({selectedPrayerList: selected});
  };

  setPlayButton = () => {
    let {prayers} = this.props;

    for (var i = 0; i < prayers.length; i++) {
      if (prayers.some(e => e.selected)) {
        return true;
      }
    }
  };

  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const {prayers, prayersLoading} = this.props;
    const back = <Icon2 name='arrowleft' size={30} color='#fff' />;
    console.log('Rosaries', this.props.prayers);

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

    const list = !prayersLoading
      ? prayers.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.listContainer}
              onPress={() => {
                this.props.selectPrayer(e, i);
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.selectPrayer(e, i);
                }}>
                <Text style={e.selected ? styles.selectedListText : styles.unselectedListText}>{e.prayer_name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.selectPrayer(e, i);
                }}>
                {e.selected ? <Icon name='check' size={20} color='green' /> : <Icon name='plus' size={20} color='white' />}
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })
      : null;

    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.back}>
            {back}
          </TouchableOpacity>
          <Text style={styles.headerText}>Select Rosary</Text>
          <TouchableOpacity
            style={{paddingRight: 30}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>{list}</ScrollView>
        <View styles={styles.footer}>
          <Button
            title={this.setPlayButton() ? 'PLAY' : 'Select Rosary'}
            buttonStyle={this.setPlayButton() > 0 ? styles.done : styles.gray}
            textStyle={styles.text}
            onPress={() => {
              this.done();
              if (this.setPlayButton()) {
                //   this.props.navigation.navigate("RosaryPlayer");
                this.props.navigation.navigate('PrayerPlayer');
              }
            }}
          />
        </View>
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
  scrollContainer: {
    flex: 1,
    padding: 20,
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
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 3,
    backgroundColor: 'rgba(52,52,52, 0.5)',
  },
  unselectedListText: {
    justifyContent: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
  },
  selectedListText: {
    justifyContent: 'flex-start',
    color: colors.blue,
    fontWeight: 'bold',
  },
  select: {
    justifyContent: 'flex-end',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  done: {
    opacity: 0.9,
    width: width - 40,
    backgroundColor: colors.blue,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  gray: {
    opacity: 0.8,
    width: width - 40,
    backgroundColor: 'gray',
    height: 50,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
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
    selectedPrayers: state.prayerReducer.selectedPrayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(
  mapStateToProps,
  {getPrayersByType, selectPrayer},
)(RosaryList);
