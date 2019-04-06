import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Animated,
  Easing
} from "react-native";
import { Button } from "react-native-elements";
import { height, width } from "../constants/Layout";
import GetStarted from "../components/modals/GetStarted";
import clouds from "../assets/images/cloud-splash.jpg";

export default class SplashScreen extends React.Component {
  state = {
    user: true
  };

  static navigationOptions = {
    header: null
  };

  getStarted = () => {
    this.props.navigation.navigate("Home");
    // We'll need to add some logic to conditionally navigate based on if its a new user visiting or an existing user
  };

  render() {
    return (
      <ImageBackground source={clouds} style={{ flex: 1 }}>
        {!this.state.user ? (
          <ScrollView contentContainerStyle={styles.colors}>
            <Text style={styles.title}>Run</Text>
            <Text style={styles.screen}>the</Text>
            <Text style={styles.title}>Rosary</Text>

            <View style={styles.buttons}>
              <Button
                title="START"
                onPress={() => this.props.navigation.navigate("Home")}
                buttonStyle={{
                  marginVertical: 10,
                  marginHorizontal: width / 7,
                  height: height / 10,
                  width: height / 3
                }}
              />
              <Button
                title="ABOUT"
                onPress={() => this.props.navigation.navigate("Login")}
                buttonStyle={{
                  marginVertical: 10,
                  marginHorizontal: width / 7,
                  height: height / 10,
                  width: height / 3
                }}
              />
              <Button
                title="SETTINGS"
                onPress={() => this.props.navigation.navigate("Login")}
                buttonStyle={{
                  marginVertical: 10,
                  marginHorizontal: width / 7,
                  height: height / 10,
                  width: height / 3
                }}
              />
            </View>
          </ScrollView>
        ) : (
          <GetStarted getStarted={this.getStarted} />
          //   If it isn't the user's first time on the app then they don't need this FYI
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  colors: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: height - height / 1.2
  },
  title: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    textAlign: "center",
    color: "white",
    fontSize: 50
  },
  screen: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    textAlign: "center",
    color: "white",
    fontSize: 30
  },
  buttons: {
    flex: 1,
    marginTop: 50
  }
});
