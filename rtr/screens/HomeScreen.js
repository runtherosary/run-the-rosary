import React from 'react';
import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { height, width } from '../constants/Layout';
import { Button } from 'react-native-elements';
import homescreen from '../assets/images/homescreen.jpeg';
import colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		const icon1 = <Icon name='linkedin' size={60} color='white' />

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
								onPress={() => this.props.navigation.navigate('RosarySplash')}
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
								onPress={() => this.props.navigation.navigate('RosarySplash')}
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontFamily: 'Avenir Next',
		fontWeight: "500",
		textShadowColor: 'gray',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 2,
		textAlign: 'center',
		color: 'white',
		fontSize: 40,
		marginTop: 150,
		marginBottom: 40
	},
	home: {
		margin: 20,
	},
});
