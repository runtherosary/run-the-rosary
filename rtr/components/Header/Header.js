import React from "react";
import { Icon } from 'react-native-elements';



export default class Banner extends React.Component {

    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})
