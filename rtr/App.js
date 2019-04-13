import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux'
import store from './ducks/store'
import AudioPlayer from './components/Player/AudioPlayer';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <AudioPlayer />
            {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
