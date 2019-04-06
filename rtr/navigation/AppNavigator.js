import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../screens/HomeScreen";
import Login from "../screens/LoginScreen";
import Splash from "../screens/SplashScreen";
import Loading from "../screens/LoadingScreen";
import RosarySplash from "../screens/Rosary/RosarySplash";
import PrayerSplash from "../screens/Prayer/PrayerSplash";
import PrayerPlayer from "../screens/Prayer/PrayerPlayer";

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
    RosarySplash: RosarySplash,
    PrayerSplash: PrayerSplash,
    PrayerPlayer: PrayerPlayer
  })
);
