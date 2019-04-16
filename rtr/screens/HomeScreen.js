import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { height, width } from '../constants/Layout';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View style={styles.container}>
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
								title='Rosary'
								onPress={() => this.props.navigation.navigate('RosarySplash')}
								buttonStyle={{
									marginVertical: height / 12,
									marginHorizontal: 5,
									height: height / 3,
									width: height / 5,
								}}
							/>

							<Button
								title='Prayer'
								onPress={() => this.props.navigation.navigate('PrayerList')}
								buttonStyle={{
									marginVertical: height / 12,
									marginHorizontal: 5,
									height: height / 3,
									width: height / 5,
								}}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
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
