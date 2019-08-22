import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import Splash from '../screens/SplashScreen';
import Loading from '../screens/LoadingScreen';
import RosaryList from '../screens/Rosary/RosaryList';
import RosarySplash from '../screens/Rosary/RosarySplash';
import PrayerList from '../screens/Prayer/PrayerList';
import PrayerPlayer from '../screens/Prayer/PrayerPlayer';
import UserScreen from '../screens/UserScreen';
import Header from '../screens/Header';
import Footer from '../screens/Footer';

export default createAppContainer(
  createSwitchNavigator({
    Loading: Loading,
    Splash: Splash,
    Login: Login,
    Home: Home,
    RosarySplash: RosarySplash,
    PrayerList: PrayerList,
    PrayerPlayer: PrayerPlayer,
    RosaryList: RosaryList,
    Header: Header,
    Footer: Footer,
    User: {
      screen: UserScreen,
      path: 'user/:name',
    },
  }),
);
