import React from 'react';
import {StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {width} from '../../constants/Layout';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import background from '../../assets/images/login-background.jpg';
import {connect} from 'react-redux';
import {getPrayersByType, selectPrayer} from '../../ducks/reducers/prayerReducer';

class PrayerList extends React.Component {
  state = {
    prayerList: [],
    selectedPrayerList: [],
    selected: 0,
    check: true,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    this.props.getPrayersByType('General');
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

  render() {
    const {prayers, prayersLoading} = this.props;

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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='arrowleft' size={30} color='#fff' />
          </TouchableOpacity>
          <Text style={[styles.text, {marginLeft: 70}]}>Select Prayers</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>{list}</ScrollView>
        <View styles={styles.footer}>
          <Button
            title={this.setPlayButton() ? 'PLAY' : 'Select Prayers'}
            buttonStyle={this.setPlayButton() > 0 ? styles.done : styles.gray}
            textStyle={styles.text}
            onPress={() => {
              this.done();
              this.props.navigation.navigate('PrayerPlayer');
            }}
          />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
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
    width,
    backgroundColor: 'green',
    height: 80,
  },
  gray: {
    width,
    backgroundColor: 'gray',
    height: 80,
  },
  text: {
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
  {getPrayersByType, selectPrayer},
)(PrayerList);
