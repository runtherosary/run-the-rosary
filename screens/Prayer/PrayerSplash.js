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

export default class PrayerSplash extends React.Component {
  state = {
    prayerList: [],
    selected: false
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { selected } = this.state;
    const check = <Icon2 name="md-checkmark" size={25} color="green" />;
    const add = <Icon2 name="md-add" size={25} color="black" />;
    let prayers = [];
    prayers.push(
      "prayer 1",
      "prayer 2",
      "prayer 3",
      "prayer 4",
      "prayer 5",
      "prayer 6",
      "prayer 7",
      "prayer 8",
      "prayer 9",
      "prayer 10",
      "prayer 11",
      "prayer 12"
    );

    const list = prayers.map((e, i) => {
      return (
        <View
          key={i}
          style={{
            flexDirection: "row",
            marginVertical: 15,
            alignItems: "center"
          }}>
          <TouchableOpacity style={styles.box}>
            <Text>{e}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ selected: !this.state.selected })}>
            {selected ? check : add}
          </TouchableOpacity>
        </View>
      );
    });

    return (
      <ImageBackground style={{ flex: 1 }}>
        <Text style={styles.title}>Prayers</Text>
        <Button
          onPress={() => this.props.navigation.navigate("PrayerPlayer")}
        />
        {/* ADD A SEARCH FILTER TO THE HEADER (STICKY MAYBE?) */}
        <ScrollView contentContainerStyle={styles.container}>{list}</ScrollView>
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
  box: {
    backgroundColor: colors.tuscany,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.falu,
    borderRadius: 10,
    width: width - width / 4,
    padding: 15,
    marginRight: 20
  }
});
