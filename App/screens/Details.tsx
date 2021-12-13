import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
export default class Action extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props.route.params
        return (
            <View style={styles.CONTAINER}>
                <Icon name="arrow-left" size={40}
                    color="#000000"
                    style={{ padding: 10, marginLeft: 15 }}
                    onPress={() => this.props.navigation.goBack()} />

                <Text style={styles.TEXTSIZE}>{name}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    CONTAINER: {
        marginTop: 30,
        shadowColor: "#000",
        height: 60,
        marginRight: 40,
        flexDirection: 'row',
    },
    TEXTSIZE: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',

    },
})