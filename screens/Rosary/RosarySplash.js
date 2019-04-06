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
import { height, width } from "../../constants/Layout";

export default class RosarySplash extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground style={{ flex: 1 }}>
        <Text style={styles.title}>Rosary</Text>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Button
              title="Mystery"
              onPress={() => this.props.navigation.navigate("Home")}
              buttonStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
                height: height / 3,
                width: width / 2 - 30
              }}
            />
            <Button
              title="Today's Rosary"
              onPress={() => this.props.navigation.navigate("Home")}
              buttonStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
                height: height / 3,
                width: width / 2 - 30
              }}
            />
          </View>
        </ScrollView>
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
    marginBottom: 40
  }
});
