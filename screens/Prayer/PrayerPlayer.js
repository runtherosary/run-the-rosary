import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { height, width } from "../../constants/Layout";
import colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import Video from "../../node_modules/react-native-video";

export default class PrayerPlayer extends React.Component {
  state = {
    prayerList: [],
    selected: false
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { selected } = this.state;

    return (
      <ImageBackground style={{ flex: 1 }}>
        <Text style={styles.title}>Audio Player</Text>
        <Video
          ref={ref => {
            this.player = ref;
          }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          source={{ uri: "background" }}
          style={styles.backgroundVideo}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    textAlign: "center",
    color: "white",
    fontSize: 70,
    marginTop: 70,
    marginBottom: 30
  },
  backgroundVideo: {
    position: "absolute",
    top: 1,
    left: 0,
    bottom: 0,
    right: 0
  }
});
