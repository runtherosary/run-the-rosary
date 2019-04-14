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
                image: mountain,
                title: "Pray to the Rosary while you run"
            },
            {
                id: 2,
                image: greentrail,
                title: "Customize your own prayer list"
            },
            {
                id: 3,
                image: trail,
                title: "Set your own pace with beats"
            }
        ]
    }

    async componentDidMount() {
        this.animation.play();
    }

    render() {
        const { views, button, page } = this.state;
        const { id } = views;
        if (views && views.length) {
            return (
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {views.map((view, i) => (
                            <View key={i}>
                                <ImageBackground style={styles.image} source={view.image}>
                                    < Animation
                                        ref={
                                            animation => {
                                                this.animation = animation;
                                            }
                                        }
                                        style={{ width: 400, height: 400 }}
                                        loop={true}
                                        source={runnerman}
                                    />
                                    <Text style={styles.text}>{view.title}</Text>

                                    {
                                        view.id === 1 ? (
                                            <View
                                                style={{
                                                    zIndex: 20,
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginBottom: 20
                                                }}>
                                                <Button
                                                    buttonStyle={{
                                                        zIndex: 20,
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.teal,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6,
                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6,

                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6,
                                                    }}
                                                />
                                            </View>
                                        ) : view.id === 2 ? (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}>
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6
                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.teal,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6
                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6
                                                    }}
                                                    />
                                            </View>
                                        ) : view.id === 3 ? (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}>
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6
                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.falu,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6
                                                    }}
                                                />
                                                <Button
                                                    buttonStyle={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 10,
                                                        backgroundColor: colors.teal,
                                                        marginHorizontal: 3,
                                                        marginVertical: 6,
                                                    }}
                                                />
                                            </View> 
                                        ) : null
                                    }
                                </ImageBackground>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
        zIndex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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
    },
    next: {
        backgroundColor: colors.teal
    },
    start: {
        backgroundColor: "green"
    }
});
