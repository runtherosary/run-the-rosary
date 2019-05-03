import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {height, width} from '../../constants/Layout';
import colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

// NOTES && TODO:
// - FIND WAY TO ADD NAVIGATION TO A COMPONENT
//    - CHEAP FIX:
//        - ADD FOOTER TO SCREENS FOLDER AND MAKE IT A ROUTE
//        - EITHER MAKE IT A FUNCTIONAL COMPONENT (IS THIS CHAY IN NATIVE)? THAT TAKES IN THE SCREEN VIEW AND RETURNS WHATEVER FOOTER LAYOUT IS NECESSARY FOR THAT SCREEN
//    - TOUGH FIX:
//        - KEEP FOOTER HERE IN COMPONENTS FOLDER
//        - FIND WAY TO PASS THE NAVIGATION PROP FOR ROUTING

export default class Footer extends React.Component {
  state = {
    paths: [
      {path: 'Login', pathIcon: 'login'},
      {path: 'Home', pathIcon: 'home'},
      {path: 'RosaryList', pathIcon: 'book'},
      {path: 'PrayerList', pathIcon: 'plus'},
      {path: 'PrayerPlayer', pathIcon: 'play'},
    ],
  };

  renderFooterIcon = (paths) => {
    let routing = paths.map((e, i) => {
      return (
        <TouchableOpacity
          onPress={() => {
            route(e.path);
          }}>
          <Icon2 name={e.pathIcon} size={30} color='#fff' />
        </TouchableOpacity>
      );
    });

    return routing;
  };

  render() {
    let {route, screen} = this.props;
    let {paths} = this.state;

    const renderFooter = paths.map((e, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {
            route(e.path);
          }}>
          <Icon2 name={e.pathIcon} size={30} color='#fff' />
        </TouchableOpacity>
      );
    });

    return <View style={styles.container}>{renderFooter}</View>;
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
