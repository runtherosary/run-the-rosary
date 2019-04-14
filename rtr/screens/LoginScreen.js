import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import background from '../assets/images/login-background.jpg';
import trail from "../assets/images/trail.jpg";
import greentrail from "../assets/images/greentrail.jpg";
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../constants/Colors';
import { connect } from 'react-redux';
import { login, register } from "../ducks/reducers/userReducer";
import axios from 'axios';

import { height, width } from '../constants/Layout';

class LoginScreen extends React.Component {
    state = {
        secure: true,
        confirmSecure: true,
        signUp: false,
        invalidConfirm: false,
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        user: []
    };

    static navigationOptions = {
        header: null,
        footer: null,
    };

    componentDidMount = async () => {
        // console.log("Current User: ", this.props.user)

        let person = {
            email: 'email@email.com',
            password: 'password'
        }

        await AsyncStorage.setItem("user", this.state.email);
        const user = await AsyncStorage.getItem('user');
        console.log("User: ", user)

        // var userExists = await AsyncStorage.getItem('user');
        // var async = await AsyncStorage.getAllKeys();
        // console.log("Async: ", async)

        // if (userExists) {
        //     console.log("User: ", userExists)
        //     let {email, password} = userExists;
        //     this.setState({email, password});
        // } else {
        //     userExists = []
        // }
    }

    authenticate = async () => {
        let { email, password, firstName, lastName, signUp } = this.state;
        let { login, register } = this.props;

        const credentials = {
            email,
            password
        }
        const registerCredentials = {
            firstName,
            lastName,
            email,
            password
        }
        if (!signUp) {
            login(credentials);
            // AsyncStorage.setItem("user", credentials).then(res => {
            //     this.props.navigation.navigate("Home");
            //     console.warn("Login 62: ", res); 
            // }).catch(err => {
            //     console.warn("error: ", err)
            // })
        } else {
            register(registerCredentials);
            // AsyncStorage.setItem("user", credentials).then(res => {
            //     this.props.navigation.navigate("Home");
            //     console.warn("Login Register 70:", res);
            // }).catch(err => {
            //     console.warn("error: ", err)
            // })
        }
    }

    render() {
        let { secure, signUp, invalidConfirm, password, confirmPassword, email, firstName, lastName } = this.state;
        const back = <Icon name='arrowleft' size={30} color='#fff' />;
        const submit = <Icon name='arrowright' size={30} color='#fff' />;
        return (
            <ImageBackground style={styles.container} source={greentrail}>
                <View style={{ flex: 1, width: width, marginTop: 40 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Splash')} style={styles.back}>
                        {back}
                    </TouchableOpacity>
                    <View>
                        <Text style={signUp ? [styles.title, { marginTop: 50 }] : styles.title}>Run the Rosary</Text>
                    </View>
                </View>

                <View style={styles.loginContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.account}><Text style={signUp ? styles.account : styles.register} onPress={() => this.setState({ signUp: !this.state.signUp })}>
                            Register
                        </Text> for a new account.
                        </Text>
<<<<<<< HEAD
                </View>
                <TouchableHighlight>
                    <TextInput
                        onChangeText={(text) => this.setState({ username: text })}
                        style={styles.input}
                        value={email ? email : null}
                        placeholder='Email'
                        autoCapitalize='none'
                        placeholderTextColor='white'
=======
					</View>
					<TouchableHighlight>
						<TextInput
                            onChangeText={(text) => this.setState({ email: text })}
							style={styles.input}
							  value={email ? email : null}
							placeholder='Email@email.com'
							autoCapitalize='none'
							placeholderTextColor='white'
>>>>>>> master
                        placeholderTextFontWeight='bold'
                        selectionColor='white'
                    />
                </TouchableHighlight>
                <TouchableHighlight>
                    <TextInput
                        onChangeText={(text) => this.setState({ password: text })}
                        style={styles.passwordInput}
                        value={password ? password : null}
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

                {signUp ? null : (
                    <TouchableOpacity onPress={() => {
                        this.authenticate();
                        this.props.navigation.navigate('Home')
                    }}
                        style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        {submit}
                    </TouchableOpacity>
                )}

                {signUp ? (
                    <View>
                        <TouchableHighlight>
                            <TextInput
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                                style={[styles.passwordInput, { marginTop: 20 }]}
                                value={confirmPassword ? confirmPassword : null}
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
                                onChangeText={(text) => this.setState({ firstName: text })}
                                style={styles.input}
                                selectionColor='white'
                                value={firstName ? firstName : null}
                                placeholder='First Name'
                                autoCapitalize="none"
                                placeholderTextColor="white"
                            />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <TextInput
                                onChangeText={(text) => this.setState({ lastName: text })}
                                value={lastName ? lastName : null}
                                style={styles.input}
                                selectionColor='white'
                                placeholder='Last Name'
                                autoCapitalize="none"
                                placeholderTextColor="white"
                            />
                        </TouchableHighlight>
                        <TouchableOpacity onPress={() => {
                            if (confirmPassword !== password) {
                                this.setState({ invalidConfirm: true })
                            } else {
                                this.authenticate();
                                this.props.navigation.navigate('Home')
                            }
                        }} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }} >
                            {submit}
                        </TouchableOpacity>
                    </View>
                ) : null}
                </View>
            </ImageBackground >
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
        marginTop: 40,
        borderRadius: 4,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    passwordInput: {
        color: 'white',
        fontWeight: 'bold',
        width: width - 65,
        marginTop: 40,
        paddingLeft: 5,
        paddingBottom: 15,
        borderRadius: 4,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    loginContainer: {
        justifyContent: 'flex-end',
        marginBottom: 100,
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
    // title: {
    //     fontFamily: 'Avenir Next',
    //     textShadowColor: 'gray',
    //     textShadowOffset: { width: -1, height: 1 },
    //     textShadowRadius: 2,
    //     textAlign: 'center',
    //     color: 'white',
    //     fontSize: 40,
    //     marginTop: 140,
    // },
    hide: {
        marginTop: 5,
        fontSize: 12,
        color: 'white',
    },
    show: {
        marginTop: 5,
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

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, { login, register })(LoginScreen);