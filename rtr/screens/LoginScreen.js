import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import background from '../assets/images/login-background.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../constants/Colors';

import { height, width } from '../constants/Layout';

export default class LoginScreen extends React.Component {
	state = {
		secure: true,
	};

	static navigationOptions = {
		header: null,
		footer: null,
	};

	render() {
		let { secure } = this.state;
		const back = <Icon name='arrowleft' size={30} color='#fff' />;
		return (
			<ImageBackground style={styles.container} source={background}>
				<View style={{ flex: 1, width: width, marginTop: 40 }}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.back}>
						{back}
					</TouchableOpacity>
					<View>
						<Text style={styles.title}>Run the Rosary</Text>
					</View>
				</View>

				<View style={styles.loginContainer}>
					<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text style={[styles.register, { marginBottom: 10 }]}>Register for a new account.</Text>
					</TouchableOpacity>
					<TouchableHighlight>
						<TextInput
							onChangeText={(text) => this.setState({ username: text })}
							style={styles.username}
							//   value={!this.state.username ? null : this.state.username}
							placeholder='Email'
							autoCapitalize='none'
							underlineColorAndroid='transparent'
							placeholderTextColor='white'
							placeholderTextFontWeight='bold'
						/>
					</TouchableHighlight>
					<TouchableHighlight>
						<TextInput
							onChangeText={(text) => this.setState({ password: text })}
							style={styles.password}
							//   value={!this.state.password ? null : this.state.password}
							placeholder='Password'
							autoCapitalize='none'
							underlineColorAndroid='transparent'
							placeholderTextColor='white'
							secureTextEntry={this.state.secure}
						/>
					</TouchableHighlight>
					<TouchableOpacity
						onPress={() => this.setState({ secure: !this.state.secure })}
						style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text style={secure ? styles.hide : styles.show}>Show Password</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,
	},
	back: {
		justifyContent: 'flex-start',
		marginLeft: 40,
	},
	username: {
		width: width - 65,
		paddingLeft: 5,
		paddingBottom: 15,
		marginVertical: 40,
		borderRadius: 4,
		borderBottomWidth: 1,
		borderColor: 'white',
	},
	password: {
		width: width - 65,
		paddingLeft: 5,
		paddingBottom: 15,
		marginBottom: 5,
		borderRadius: 4,
		borderBottomWidth: 1,
		borderColor: 'white',
		textDecorationLine: 'none',
	},
	loginContainer: {
		justifyContent: 'flex-end',
		marginBottom: 100,
	},
	title: {
		textShadowColor: 'gray',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 2,
		textAlign: 'center',
		color: 'white',
		fontSize: 40,
		marginTop: 200,
		marginBottom: 40,
	},
	show: {
		fontSize: 12,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 4,
		color: 'white',
	},
	hide: {
		fontSize: 12,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 4,
		color: colors.blue,
	},
	register: {
		fontSize: 15,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 4,
		color: 'white',
	},
});
