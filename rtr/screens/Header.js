import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Packages
import Icon from 'react-native-vector-icons/AntDesign';

// Constants
import { height, width } from "../constants/Layout";
import colors from '../constants/Colors';

export default class Header extends React.Component {
  state = {
    expanded: false
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { expanded } = this.state;
    const down = <Icon name='down' color={colors.white} size={15} />;
    const up = <Icon name='up' color={colors.white} size={15} />;

    return (
      <View style={expanded ? styles.menuContainer : styles.headerContainer}>

        {/* Header */}
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => this.toggle()}
        >

          <Text style={styles.title}>
            {this.props.screen}
          </Text>

          {expanded ? up : down}

        </TouchableOpacity>

        {/* Menu */}
        {expanded ? (
          <ScrollView contentContainerStyle={styles.body}>
            <Text>
              {/* All of the different routes will go here */}
            </Text>
          </ScrollView>
        ) : null}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menuContainer: {
    zIndex: 1000,
    position: 'absolute',
    height: height - 200,
    width,
  },
  headerContainer: {
    zIndex: 1000,
    position: 'absolute',
    height: height / 10,
    width,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35,
    width,
    backgroundColor: colors.darkgray,
  },
  title: {
    fontFamily: 'Baskerville-Bold',
    fontSize: 20,
    color: colors.white,
    marginRight: 5
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    paddingTop: 10,
    backgroundColor: colors.darkgray
  }
});