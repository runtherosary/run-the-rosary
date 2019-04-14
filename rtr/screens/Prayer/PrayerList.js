import React from 'react';
import {StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Button} from 'react-native-elements';
import {height, width} from '../../constants/Layout';
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

    // this.setState({prayerList: prayers});
  };

  addToQueue(prayer) {
    // let added = this.state.selectedPrayerList.slice();
    // added.push(prayer);
    // console.warn('Add Q: ', added);
    // this.setState({selectedPrayerList: added});
  }

  removeFromQueue(name) {
    // let arr = this.state.selectedPrayerList;
    // for (var i = 0; i < this.state.selectedPrayerList.length; i++) {
    //   if (name === arr[i].prayer_name) {
    //     var remove = arr.splice(i, 1);
    // //   }
    // }
    // console.warn('Remove Q: ', remove);
    // this.setState({selectedPrayerList: remove});
  }

  render() {
    const {prayers} = this.props;

    console.log(this.props.prayers);

    const back = <Icon name='arrowleft' size={30} color='#fff' />;

    const list = prayers
      ? prayers.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.listContainer}
              onPress={() => {
                this.props.selectPrayer(e, i);
              }}>
              <View>
                <Text style={e.selected ? styles.selectedListText : styles.unselectedListText}>{e.prayer_name}</Text>
              </View>
              <View>{e.selected ? <Icon name='check' size={20} color='green' /> : <Icon name='plus' size={20} color='black' />}</View>
            </TouchableOpacity>
          );
        })
      : null;

    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={{flexDirection: 'row', alignItems: 'space-between', marginTop: 40}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>{back}</TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.container}>{list}</ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

const mapStateToProps = state => {
  return {
    prayers: state.prayerReducer.prayers,
    prayersLoading: state.prayerReducer.prayersLoading,
  };
};

export default connect(
  mapStateToProps,
  {getPrayersByType, selectPrayer},
)(PrayerList);
