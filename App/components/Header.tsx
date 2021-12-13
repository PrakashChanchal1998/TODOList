import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation, listData } = this.props
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>
                    <Text style={styles.TEXTSIZE}>Tools</Text>
                    <Image
                        source={
                            require('../assets/billgates.jpg')}
                        style={styles.IMAGE_STYLE}
                        resizeMode="contain"
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CONTAINER: {
        marginTop: 30,
        shadowColor: "#000",
        height: 60,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
    },
    TEXTSIZE: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',

    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    IMAGE_STYLE: {
        marginRight: 20,
        height: 50,
        width: 50,
        borderRadius: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
    }
})