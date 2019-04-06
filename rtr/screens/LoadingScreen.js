import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { height, width } from "../constants/Layout";
import clouds from "../assets/images/cloud-splash.jpg";

import Animation from "lottie-react-native";
import stopwatch from "../assets/animations/stopwatch.json";

export default class PrayerSplash extends React.Component {
  async componentDidMount() {
    this.animation.play();
    setTimeout(() => {
      this.props.navigation.navigate("Splash");
    }, 2000);
  }

  render() {
    return (
      <ImageBackground source={clouds} style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{ width: 300, height: 300 }}
            loop={true}
            source={stopwatch}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    textAlign: "center",
    color: "white",
    fontSize: 70,
    marginTop: 70
  }
});
