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
        confirmSecure: true,
        register: false,
        invalidConfirm: false,
        email: '',
        password: '',
        confirmPassword: ''
	};

	static navigationOptions = {
		header: null,
		footer: null,
    };
    


	render() {
		let { secure, register, invalidConfirm, password, confirmPassword } = this.state;
        const back = <Icon name='arrowleft' size={30} color='#fff' />;
        const submit = <Icon name='arrowright' size={30} color='#fff' />;
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
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.account}><Text style={register ? styles.account : styles.register} onPress={() => this.setState({register: !this.state.register})}>
                            Register
                        </Text> for a new account. 
                        </Text>
					</View>
					<TouchableHighlight>
						<TextInput
							onChangeText={(text) => this.setState({ username: text })}
							style={styles.input}
							//   value={!this.state.username ? null : this.state.username}
							placeholder='Email'
							autoCapitalize='none'
							placeholderTextColor='white'
                            placeholderTextFontWeight='bold'
                            selectionColor='white'
						/>
					</TouchableHighlight>
					<TouchableHighlight>
						<TextInput
							onChangeText={(text) => this.setState({ password: text })}
							style={styles.passwordInput}
							//   value={!this.state.password ? null : this.state.password}
                            placeholder='Password'
                            selectionColor='white'
							autoCapitalize='none'
							placeholderTextColor='white'
							secureTextEntry={this.state.secure}
						/>
					</TouchableHighlight>
                    <TouchableOpacity
						onPress={() => this.setState({ secure: !this.state.secure })}
						style={{ justifyContent: 'center', alignItems: 'center' }}>
						{secure ? (
                        <Text style={styles.show}>Show Password</Text>
                        ) : (
                            <Text style={styles.hide}>Hide Password</Text>
                        )}
					</TouchableOpacity>

                      {register ? (
                          <View>
                                <TouchableHighlight>
						            <TextInput
							onChangeText={(text) => this.setState({ confirmPassword: text })}
							style={[styles.passwordInput, {marginTop: 20}]}
                            //   value={!this.state.password ? null : this.state.password}
                            placeholder='Confirm Password'
                            selectionColor='white'
                            
							autoCapitalize='none'
							placeholderTextColor='white'
							secureTextEntry={this.state.confirmSecure}
						/>
					</TouchableHighlight>

                                    <Text style={invalidConfirm ? styles.invalid : styles.match}>Passwords do not match.</Text>

                    <TouchableHighlight>
                        <TextInput 
                            onChangeText={(text) => this.setState({firstName: text})}
                            style={styles.input}
                            selectionColor='white'

                            placeholder='First Name'
                            autoCapitalize="none"
                            placeholderTextColor="white"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <TextInput 
                            onChangeText={(text) => this.setState({lastName: text})}
                            style={styles.input}
                            selectionColor='white'

                            placeholder='Last Name'
                            autoCapitalize="none"
                            placeholderTextColor="white"
                        />
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => {
                        if (confirmPassword !== password) {
                            this.setState({invalidConfirm:true})
                        } else {
                            // send REGISTER data here !!
                            this.props.navigation.navigate('Home')
                        }
                        }} style={{justifyContent: 'center', alignItems: 'center'}} >
						{submit}
					</TouchableOpacity>
                    </View>
                      ) : null}
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
	input: {
        color: 'white',
        fontWeight: 'bold',
		width: width - 65,
		paddingLeft: 5,
		paddingBottom: 15,
		marginVertical: 40,
		borderRadius: 4,
		borderBottomWidth: 1,
		borderColor: 'white',
    },
    passwordInput: {
        color: 'white',
        fontWeight: 'bold',
        width: width - 65,
		paddingLeft: 5,
		paddingBottom: 15,
		// marginTop: 40,
		borderRadius: 4,
		borderBottomWidth: 1,
		borderColor: 'white',
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
	hide: {
		fontSize: 12,
		color: 'white',
	},
	show: {
		fontSize: 12,
		color: colors.blue,
	},
	register: {
        fontSize: 15,
        marginBottom: 10,
		color: colors.blue,
    },
    account: {
        fontSize: 15,
        marginBottom: 10,
		color: 'white',
    },
    invalid: {
        color: colors.red,
        fontSize: 15,
    },
    match: {
        opacity: 0
    }
});
