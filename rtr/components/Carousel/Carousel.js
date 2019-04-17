import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    Animated,
    Easing,
    Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import colors from "../../constants/Colors";
import AppNavigator from "../../navigation/AppNavigator";
import { height, width } from "../../constants/Layout";
import Animation from "lottie-react-native";
import runnerman from "../../assets/animations/runnerman.json";
import mountain from "../../assets/images/mountain.jpg";
import greentrail from "../../assets/images/greentrail.jpg";
import trail from "../../assets/images/trail.jpg";


export default class startCarousel extends React.Component {
    state = {
        button: "Next",
        views: [
            {
                id: 1,
                // image: mountain,
                title: "Pray to the Rosary while you run"
            },
            {
                id: 2,
                // image: greentrail,
                title: "Customize your own prayer list"
            },
            {
                id: 3,
                // image: trail,
                title: "Set your own pace with beats"
            }
        ]
    }

    // async componentDidMount() {
    //     this.animation.play();
    // }

    scrollX = new Animated.Value(0)

    render() {
        // const { views } = this.state;
        let position = Animated.divide(this.scrollX, width);
        let views = this.state.views.map((view, i) => {
            if (view && view.length) {
                return (
                    <Text key={i} style={styles.text}>{view.title}</Text>
                )
            }
        });
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width, height }} source={mountain}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
                    >
                        {views}
                    </ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        {this.state.views.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            });
                            return (
                                <Animated.View
                                    key={i}
                                    style={{ opacity, height: 10, width: 10, backgroundColor: 'black', margin: 8, borderRadius: 5 }}
                                />
                            )
                        })}
                    </View>
                </ImageBackground>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    image: {
        width,
        height,
        zIndex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    fixed: {
        width,
        height,
        zIndex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    viewContainer: {
        height: 400,
        width: 250
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
        fontFamily: "Avenir Next",
        letterSpacing: 1.5
    }
});


