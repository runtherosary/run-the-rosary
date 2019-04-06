import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { ExpoLinksView } from "@expo/samples";

import { height, width } from "../constants/Layout";

export default class LoginScreen extends React.Component {
  state = {
    secure: true
  };

  static navigationOptions = {
    header: null,
    footer: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Login</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.text, { marginBottom: 10 }]}>
              "Register for a new account."
            </Text>
          </TouchableOpacity>
          <TouchableHighlight>
            <TextInput
              onChangeText={text => this.setState({ username: text })}
              style={styles.username}
              //   value={!this.state.username ? null : this.state.username}
              placeholder="USERNAME"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              placeholderTextFontWeight="bold"
            />
          </TouchableHighlight>
          <TouchableHighlight>
            <TextInput
              onChangeText={text => this.setState({ password: text })}
              style={styles.password}
              //   value={!this.state.password ? null : this.state.password}
              placeholder="PASSWORD"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              secureTextEntry={this.state.secure}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.setState({ secure: !this.state.secure })}>
            <Text style={styles.text}>Show Password</Text>
          </TouchableHighlight>

          <View style={styles.linebreak} />

          <TouchableOpacity>
            <Button
              onPress={() => this.props.navigation.navigate("Home")}
              title="BACK"
              buttonStyle={{
                width: width - 250,
                height: height - height / 0.8,
                marginTop: 10,
                borderWidth: 3,
                borderRadius: 5
              }}
              textStyle={{
                fontSize: 18,
                letterSpacing: 1
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linebreak: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 15,
    marginBottom: 30
  },
  username: {
    width: width - 65,
    height: height - height / 1.12,
    paddingLeft: 25,
    marginVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    textDecorationLine: "none"
  },
  password: {
    width: width - 65,
    height: height - height / 1.12,
    paddingLeft: 25,
    marginVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    textDecorationLine: "none"
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
  },
  text: {
    fontSize: 12,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  }
});
