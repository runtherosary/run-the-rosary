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
import mountain from "../../assets/images/mountain.jpg";
import greentrail from "../../assets/images/greentrail.jpg";
import trail from "../../assets/images/trail.jpg";


export default class GetStarted extends React.Component {
  state = {
    page: 1,
    button: "Next"
  };



  async componentDidMount() {
    this.animation.play();
  }

  static navigationOptions = {
    header: null
  };

  render() {

    const getStartedDisplay = [
      {
        modal: "Pray to the Rosary while you run",
        image: mountain
      },
      {
        modal: "Customize your own prayer list",
        image: greentrail
      },
      {
        modal: "Set your own pace with selected beats",
        image: trail
      },
    ]
    const { page, button } = this.state;
    const { navigation } = this.props;
    let displayItems = getStartedDisplay.map((e, i) => {
      if (i + 1 === this.state.page) {
        return (
          <ImageBackground source={e.image} key={i} style={{ width, height, justifyContent: "center", alignItems: "center", zIndex: -1 }} >
            {/* < Animation
              ref={
                animation => {
                  this.animation = animation;
                }
              }
              style={{ width: 400, height: 400 }}
              loop={true}
              source={runnerman}
            /> */}
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Avenir Next', fontWeight: '600' }}>{e.modal}</Text>



            {
              page === 1 ? (
                <View
                  style={{
                    zIndex: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Button
                    buttonStyle={{
                      zIndex: 20,
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
                      marginVertical: 6,
                    }}
                  />
                </View>
              ) : null
            }
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
          </ImageBackground>
        );
      }
    });


    return (
      < View style={{ flexDirection: "column" }}>

        <View style={styles.getStartedView}>
          {displayItems}
        </View>

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
      </View >
    );
  }
}

const styles = StyleSheet.create({

  getStartedView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  // container: {
  // zIndex: 20
  // marginVertical: 50,
  // marginHorizontal: 20,
  // flexDirection: "column",
  // justifyContent: "space-around",
  // paddingHorizontal: 40,
  // paddingTop: 60,
  // paddingBottom: 40,
  // borderRadius: 20
  // },
  image: {
    height: 400,
    width: 250
  },
  next: {
    backgroundColor: colors.teal
  },
  start: {
    backgroundColor: "green"
  },
  font: {
    fontFamily: "Avenir Next"
  }
});
