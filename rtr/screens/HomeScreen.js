import React from 'react';
import {Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../constants/Layout';
import {Button} from 'react-native-elements';
import homescreen from '../assets/images/homescreen.jpeg';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Title from '../components/Title';
import Animation from 'lottie-react-native';
import title from '../assets/animations/titleAnim.json';
import rosary from '../assets/images/rosary.png';
import pray from '../assets/images/praying-hands.png';
import today from '../assets/images/login-background.jpg';

import Footer from '../components/Footer/Footer';

export default class HomeScreen extends React.Component {
  state = {screen: 'Home'};
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.animation.play(0, 164);
  }

<<<<<<< HEAD
		return (
			<ImageBackground source={homescreen} style={{ flex: 1, opacity: .85 }}>
				<Text style={styles.title}>Run The Rosary</Text>
				<ScrollView>
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
							alignContent: 'center',
							justifyContent: 'center',
						}}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignContent: 'center',
								justifyContent: 'center',
							}}>
							<Button
								title={icon1}
								onPress={() => this.props.navigation.navigate('RosaryList')}
								buttonStyle={{
									opacity: .8,
									backgroundColor: colors.blue,
									marginVertical: height / 20,
									marginHorizontal: 5,
									height: height / 5,
									width: height / 5,
								}}
							/>
							<Button
								title='Prayer'
								onPress={() => this.props.navigation.navigate('PrayerList')}
								buttonStyle={{
									opacity: .8,
									backgroundColor: colors.blue,
									marginVertical: height / 20,
									marginHorizontal: 5,
									height: height / 5,
									width: height / 5,
								}}
							/>
						</View>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignContent: 'center',
								justifyContent: 'center',
							}}>
							<Button
								title={icon1}
								onPress={() => this.props.navigation.navigate('RosaryList')}
								buttonStyle={{
									opacity: .8,
									backgroundColor: colors.blue,
									marginVertical: height / 18,
									marginHorizontal: 5,
									height: height / 5,
									width: height / 5,
								}}
							/>
							<Button
								title='Prayer'
								onPress={() => this.props.navigation.navigate('PrayerList')}
								buttonStyle={{
									opacity: .8,
									backgroundColor: colors.blue,
									marginVertical: height / 18,
									marginHorizontal: 5,
									height: height / 5,
									width: height / 5,
								}}
							/>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
=======
  route(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const {screen} = this.state;
    const icon1 = <Icon name='linkedin' size={60} color='white' />;
    const play = (
      <Animation
        ref={animation => {
          this.animation = animation;
        }}
        // style={{height: 200, width}}
        loop={false}
        source={title}
      />
    );
    const todaysRosary = (
      <Text>
        "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a
        little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters
        in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an
        infant named Jeb." - Samuel L. 31:17
      </Text>
    );

    return (
      <ImageBackground source={homescreen} style={{flex: 1, opacity: 0.85}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{paddingLeft: 30}}
            onPress={() => {
              this.route('Home');
            }}>
            <Icon name='menu' size={30} color='#fff' />
          </TouchableOpacity>
          <Text>Run the Rosary</Text>
          <TouchableOpacity
            style={{paddingRight: 30}}
            onPress={() => {
              this.route('User');
            }}>
            <Icon2 name='user' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title={todaysRosary}
                titleStyle={styles.todayText}
                onPress={() => this.route('RosaryList')}
                buttonStyle={styles.todayButton}
              />
              <Button
                icon={play}
                onPress={() => this.route('PrayerPlayer')}
                buttonStyle={[styles.playButton, {backgroundColor: 'transparent'}]}
              />
              <Button
                title='Rosary'
                titleStyle={styles.buttonText}
                icon={<Image source={rosary} style={{height: 100, width: 100}} />}
                onPress={() => this.route('RosaryList')}
                buttonStyle={styles.prayerButton}
              />
              <Button
                title='Prayer'
                titleStyle={styles.buttonText}
                icon={<Image source={pray} style={{height: 100, width: 100}} />}
                onPress={() => this.route('PrayerList')}
                buttonStyle={styles.prayerButton}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.route('Splash');
            }}>
            <Icon2 name='home' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('RosaryList');
            }}>
            <Icon2 name='book' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerList');
            }}>
            <Icon2 name='plus' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.route('PrayerPlayer');
            }}>
            <Icon2 name='play' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
>>>>>>> master
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'black',
    width,
    height: height / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
  },
  home: {
    margin: 20,
  },
  playButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: colors.blue,
    borderWidth: 2,
    height: 230,
    width: 270,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  prayerButton: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    opacity: 0.9,
    backgroundColor: colors.blue,
    height: 225,
    width: 180,
    margin: 10,
    borderRadius: 5,
  },
  todayButton: {
    opacity: 0.6,
    backgroundColor: colors.darkgray,
    height: 150,
    width: 375,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  todayText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerContainer: {
    backgroundColor: colors.darkgray,
    opacity: 0.8,
    width,
    height: height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});
