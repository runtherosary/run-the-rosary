import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';

// Packages
import { Button } from 'react-native-elements';

// Header & Footer
import Footer from '../Footer';
import Header from '../Header';

// Constants
import { height, width } from '../../constants/Layout';

export default class RosarySplash extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const screen = "RosarySplash"
    return (
      <ImageBackground style={{ flex: 1 }}>
        <Header
          navigation={this.props.navigation}
          screen={screen} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Button
              title='Mystery'
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
                height: height / 3,
                width: width / 2 - 30,
              }}
            />
            <Button
              title="Today's Rosary"
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
                height: height / 3,
                width: width / 2 - 30,
              }}
            />
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 70,
    marginTop: 70,
    marginBottom: 40,
  },
});
