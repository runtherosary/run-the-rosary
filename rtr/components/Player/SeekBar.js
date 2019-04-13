import React, { Component } from 'react';
import { Slider } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';



class SeekBar extends Component{
  constructor(){
    super()
    this.state = {
      value: 0
    }
  }
  
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
      )
  }
};

export default SeekBar;

