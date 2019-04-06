import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { height, width } from "../../constants/Layout";
import { Button } from "react-native-elements";

export default class Player extends React.Component {
  static naivgationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Player Component</Text>
      </View>
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
