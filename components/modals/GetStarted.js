import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Animated,
  Easing
} from "react-native";
import { Button } from "react-native-elements";
import colors from "../../constants/Colors";
import AppNavigator from "../../navigation/AppNavigator";
import { height, width } from "../../constants/Layout";
import clouds from "../../assets/images/cloud-splash.jpg";
import Animation from "lottie-react-native";
import runnerman from "../../assets/animations/runnerman.json";

export default class GetStarted extends React.Component {
  state = {
    page: 1,
    modals: [
      "Set Your Own Pace with a beat and a rosary",
      "Customize your own prayer list",
      "Keep up with the daily rosaries"
    ],
    button: "Next"
  };

  async componentDidMount() {
    this.animation.play();
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { page, button } = this.state;
    const { navigation } = this.props;
    let pages = this.state.modals.map((e, i) => {
      if (i + 1 === this.state.page) {
        return (
          <View
            key={i}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 100
            }}>
            <Text>{e}</Text>
          </View>
        );
      }
    });

    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{ width: 400, height: 400 }}
            loop={true}
            source={runnerman}
          />
        </View>

        {pages}

        {page === 1 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.teal,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
          </View>
        ) : this.state.page === 2 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.teal,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
          </View>
        ) : this.state.page === 3 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.falu,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
            <Button
              buttonStyle={{
                height: 10,
                width: 10,
                borderRadius: 10,
                backgroundColor: colors.teal,
                marginHorizontal: 3,
                marginVertical: 6
              }}
            />
          </View>
        ) : null}

        <Button
          title={button}
          onPress={() => {
            this.setState({ page: this.state.page + 1 });
            if (page === 2) {
              this.setState({ button: "Get Started" });
            }
            if (button === "Get Started") {
              this.props.getStarted();
            }
          }}
          buttonStyle={button === "Get Started" ? styles.start : styles.next}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: colors.isabelline,
    paddingHorizontal: 40,
    paddingTop: 60,
    paddingBottom: 40,
    borderRadius: 20
  },
  image: {
    height: 400,
    width: 250
  },
  next: {
    backgroundColor: colors.teal
  },
  start: {
    backgroundColor: "green"
  }
});
