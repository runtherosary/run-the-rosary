import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Packages
import { Button } from 'react-native-elements';
import Animation from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Feather';

// Components

// Header & Footer
import Header from "../screens/Header";
import Footer from '../screens/Footer';

// Constants
import { height, width } from '../constants/Layout';
import colors from '../constants/Colors';

// Assets
import homescreen from '../assets/images/homescreen.jpeg';


export default class UserScreen extends React.Component {
  state = {
    screen: "User"
  };

  static navigationOptions = {
    navigationOptions: {
      header: null
    }
  };

  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const arrowRightSmall = <Icon name='arrow-right' size={15} color={colors.blue} />;
    return (
      <ImageBackground source={homescreen} style={{ opacity: 0.85 }}>

        {/* HEADER */}
        <Header navigation={this.props.navigation} screen={this.state.screen} />

        {/* USER PROFILE BODY */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* User Metrics */}
          <View style={styles.metricContainer}>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Username</Text>
              <Text style={styles.metricText}>ericwickham</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Password</Text>
              <Text style={styles.metricText}>*********</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Gender</Text>
              <Text style={styles.metricText}>Male</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Age</Text>
              <Text style={styles.metricText}>26</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Height</Text>
              <Text style={styles.metricText}>6'2"</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricType}>Weight</Text>
              <Text style={styles.metricText}>225</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* User Stats */}
            <View style={styles.statButton}>
              <View style={styles.statUnderline}>
                <Text style={styles.statText}>
                  Total mil
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  12.55
                  {/* Total distance covered by user */}
                </Text>
              </View>
            </View>

            <View style={styles.statButton}>
              <View style={styles.statUnderline}>
                <Text style={styles.statText}>
                  hr : min : sec
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  3:15:43
                  {/* Total time spent working out */}
                </Text>
              </View>
            </View>

            <View style={styles.statButton}>
              <View style={styles.statUnderline}>
                <Text style={styles.statText}>
                  Total runs
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  13
                  {/* Number of runs/walks */}
                </Text>
              </View>
            </View>

            <View style={styles.statButton}>
              <View style={styles.statUnderline}>
                <Text style={styles.statText}>
                  Calories
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  6421
                  {/* Total number of calories burned */}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.statText}>
              Recent Activities
              {arrowRightSmall}
            </Text>
          </View>
        </ScrollView>

        {/* Footer */}
        <Footer navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 9,
  },
  metricContainer: {
    marginTop: 20,
    flexDirection: 'column',
    width: width - 40,
    marginHorizontal: 20
  },
  metric: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  metricType: {
    color: colors.white,
  },
  metricText: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  statButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  statText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    color: colors.blue,
  },
  statUnderline: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 3,
    borderColor: colors.transBlue,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 45,
    paddingBottom: 10,
    color: 'white',
  },
});
