import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { height, width } from '../constants/Layout';
import GetStarted from '../components/modals/GetStarted';
import background from '../assets/images/splash-background.jpg';
import colors from '../constants/Colors';

export default class SplashScreen extends React.Component {
	state = {
		user: true,
	};

	static navigationOptions = {
		header: null,
	};

	getStarted = () => {
		this.props.navigation.navigate('Home');
		// We'll need to add some logic to conditionally navigate based on if its a new user visiting or an existing user
	};

	render() {
		return (
			<ImageBackground source={background} style={{ flex: 1 }}>
				{/* {!this.state.user ? ( */}
				<ScrollView contentContainerStyle={styles.container}>
					<View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 150 }}>
						<Text style={styles.title}>Run the Rosary</Text>
					</View>

					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 300 }}
						onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.start}>START</Text>
					</TouchableOpacity>
				</ScrollView>
				{/* ) : (
          <GetStarted getStarted={this.getStarted} />
          //   If it isn't the user's first time on the app then they don't need this FYI
        )} */}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		textShadowColor: 'black',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 8,
		textAlign: 'center',
		color: 'white',
		fontSize: 50,
	},

	start: {
		fontSize: 45,
		color: colors.blue,
		// fontWeight: 'bold',
	},
});
