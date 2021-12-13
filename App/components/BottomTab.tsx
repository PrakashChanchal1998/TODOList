import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
export default class BottomTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>

                    <Icon name="folder" size={40}
                        color="#000000"
                        style={{ padding: 10, marginLeft: 15 }}
                        onPress={() => navigation.navigate('Home')} />
                    <Icon name="grid" size={40}
                        color="#000000"
                        style={{ padding: 10, marginLeft: 15 }}
                        onPress={() => navigation.navigate('Home')} />
                    <Icon name="users" size={40}
                        color="#000000"
                        style={{ padding: 10, marginLeft: 15 }}
                        onPress={() => navigation.navigate('Home')} />
                    <Icon name="message" size={40}
                        color="#000000"
                        style={{ padding: 10, marginLeft: 15 }}
                        onPress={() => navigation.navigate('Home')} />
                    <Icon name="time-slot" size={40}
                        color="#000000"
                        style={{ padding: 10, marginLeft: 15 }}
                        onPress={() => navigation.navigate('Home')} />
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
        position: 'absolute',
        bottom: 10,
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