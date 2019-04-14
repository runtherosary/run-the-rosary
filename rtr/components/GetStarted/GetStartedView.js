// import React from "react";
// import {
//     StyleSheet,
//     View,
//     Text,
//     ScrollView,
//     ImageBackground,
//     Image,
//     Animated,
//     Easing
// } from "react-native";
// import { Button } from "react-native-elements";
// import colors from "../../constants/Colors";
// import AppNavigator from "../../navigation/AppNavigator";
// import { height, width } from "../../constants/Layout";
// import clouds from "../../assets/images/cloud-splash.jpg";
// import Animation from "lottie-react-native";
// import { mountain } from "../../assets/images/mountain.jpg";
// import { greentrail } from "../../assets/images/greentrail.jpg";
// import { trail } from "../../assets/images/trail.jpg";



// export default class GetStartedView extends React.Component {
//     state = {
//         page: 1,
//         modals: [
//             "Set Your Own Pace with a beat and a rosary",
//             "Customize your own prayer list",
//             "Keep up with the daily rosaries"
//         ],
//         images: [
//             <img src={mountain} />
//             , <img src={trail} />
//             , <img src={greentrail} />
//         ],
//         button: "Next"
//     };

//     async componentDidMount() {

//     }

//     static navigationOptions = {
//         header: null
//     };

//     render() {
//         const { page, button } = this.state;
//         const { navigation } = this.props;
//         let backgroundImg = this.state.images.map((e, i) => {
//             if (i + 1 === this.state.page) {
//                 return (
//                     <ImageBackground
//                         key={i}
//                         src={{ e }}
//                         style={{
//                             width: 100
//                             , height: 100
//                         }}>
//                     </ImageBackground>
//                 );
//             }
//         })
//         let quote = this.state.modals.map((e, i) => {
//             if (i + 1 === this.state.page) {
//                 return (
//                     <View
//                         key={i}
//                         style={{
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginVertical: 100
//                         }}>
//                         <Text>{e}</Text>
//                     </View>
//                 )
//             }
//         });
//     };

//     return(

//     )

// }



