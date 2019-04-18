import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import Splash from '../screens/SplashScreen';
import Loading from '../screens/LoadingScreen';
import RosaryList from '../screens/Rosary/RosaryList';
import RosarySplash from '../screens/Rosary/RosarySplash';
import PrayerList from '../screens/Prayer/PrayerList';
import PrayerPlayer from '../screens/Prayer/PrayerPlayer';
import UserScreen from '../screens/UserScreen';

//   import MainTabNavigator from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Loading: Loading,
    Splash: Splash,
    Login: Login,
    Home: Home,
    User: UserScreen,
    RosarySplash: RosarySplash,
    PrayerList: PrayerList,
    PrayerPlayer: PrayerPlayer,
    RosaryList: RosaryList,
  }),
);
