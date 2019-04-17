import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {height, width} from '../../constants/Layout';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Footer extends React.Component {
  componentDidMount() {
    console.warn('props: ', this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Icon name='home' size={30} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('RosarySplash');
          }}>
          <Icon2 name='book' size={30} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PrayerList');
          }}>
          <Icon name='plus' size={30} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PrayerPlayer');
          }}>
          <Icon name='play' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    opacity: 0.8,
    width,
    height: height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  icon: {
    color: 'white',
  },
});
