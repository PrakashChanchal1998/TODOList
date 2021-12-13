import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Header from '../components/Header'
import { ListView } from '../components/ListView'
import { data } from "../data/List"
import BottamTab from "../components/BottomTab"
const Home = (props) => {

    const renderList = (item) => {
        return (
            <View style={styles.LIST_CONTAINER}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Details", {
                        name: item.name
                    })}
                >
                    <Image
                        source={{ uri: `${item.url}` }}
                        style={styles.IMG_SIZE}
                        tintColor={`${item.color}`}
                    />
                    <Text style={styles.TEXTSIZE}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.CONTAINER}>
            <Header
                navigation={props.navigation}
            />
            <ListView
                items={data}
                keyExtractor={item => item.key}
                numColumns={2}
                renderItem={({ item }) => {
                    return (

                        renderList(item)
                    )
                }}
            />
            <BottamTab
                navigation={props.navigation}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
    },
    IMG_SIZE: {
        margin: 15,
        height: 75,
        width: "40%",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: 'center',
        marginLeft: 60,
        marginBottom: 10,

    },
    LIST_CONTAINER: {
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowColor: "#000",
        backgroundColor: 'white',
        marginLeft: 15,
        marginBottom: 10,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 20,
        width: "45%",
        borderRadius: 20
    },
    TEXTSIZE: {
        color: '#000000',
        margin: 10,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'

    },
})
export default Home