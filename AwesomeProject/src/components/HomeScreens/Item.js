import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const Item = ({ route }) => {

    results = {
        name: route.params?.name,
        img: route.params?.img,
        gender: route.params?.gender,
        status: route.params?.status,
        locationName: route.params.locationName,
        idCharacter: route.params?.idCharacter
    }

    console.log(results.idCharacter)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerItem}>
                <Image style={styles.img} source={{ uri: results.img }}></Image>
            </View>
            <View style={styles.containerDescription}>
                <View style={{ paddingVertical: 5 }}>
                    <Text style={{ color: 'white', fontSize: 26 }}>Name: {results.name}</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <Text style={{ color: 'white', fontSize: 26 }}>Gender: {results.gender}</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <Text style={{ color: 'white', fontSize: 26 }}>Status: {results.status}</Text>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <Text style={{ color: 'white', fontSize: 26 }}>Location: {results.locationName}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#090909',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    containerItem: {
        marginVertical: 20,
    },

    img: {
        height: 300,
        width: 300,
        borderRadius: 10
    },

    containerDescription: {
        alignItems: 'flex-left',
    },

    text: {
        color: 'white',
        fontSize: 26
    }


})



export default Item