import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

// Packages
import Animation from 'lottie-react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

// Redux
import { connect } from 'react-redux';
import { getPrayersByType, selectPrayer } from '../../ducks/reducers/prayerReducer';

// Constants
import { width, height } from '../../constants/Layout';
import colors from '../../constants/Colors';

// Header & Footer
import Header from '../Header';
import Footer from '../Footer';

// Assets
import background from '../../assets/images/login-background.jpg';

class RosaryList extends React.Component {
  state = {
    rosaryList: [],
    selectedRosaryList: [],
    selected: 0,
    check: true,
    screen: 'Select Rosaries'
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    this.props.getPrayersByType('Rosary');
  };

  done = () => {
    let { prayers } = this.props;
    let selected = [];
    for (var i = 0; i < prayers.length; i++) {
      if (prayers[i].selected) {
        selected.push(prayers[i]);
      }
    }
    this.setState({ selectedPrayerList: selected });
  };

  setPlayButton = () => {
    let { prayers } = this.props;

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
    // console.log('Rosaries', this.props.prayers);
    const { prayers, prayersLoading } = this.props;
    const { screen } = this.state;
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
              <Text
                style={e.selected ? styles.selectedListText : styles.unselectedListText}>
                {e.prayer_name}
              </Text>
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
      <ImageBackground
        style={styles.container}
        source={background}>

        {/* Header */}
        <Header
          navigation={this.props.navigation}
          screen={screen} />

        {/*List of Rosaries  */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {list}
        </ScrollView>

        {/* Go To Player Button*/}
        <View styles={styles.playButtonContainer}>
          <Button
            title={this.setPlayButton() ? 'PLAY' : 'Select Rosary'}
            buttonStyle={this.setPlayButton() > 0 ? styles.goToPlayer : styles.selectPrayers}
            textStyle={styles.playButtonText}
            onPress={() => {
              this.done();
              if (this.setPlayButton()) {
                this.props.navigation.navigate('PrayerPlayer');
              }
            }}
          />
        </View>

        {/* Footer */}
        <Footer navigation={this.props.navigation} />
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
    marginTop: height / 9,
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
  playButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  goToPlayer: {
    opacity: 0.9,
    width: width - 40,
    backgroundColor: colors.blue,
    height: 50,
    marginBottom: height / 10,
    marginHorizontal: 20,
  },
  selectPrayers: {
    opacity: 0.8,
    width: width - 40,
    backgroundColor: 'gray',
    height: 50,
    marginBottom: height / 10,
    marginHorizontal: 20,
  },
  playButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
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
  { getPrayersByType, selectPrayer },
)(RosaryList);
