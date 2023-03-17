import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const Item = ({ route }) => {
    results = {
        name: route.params?.name,
        img: route.params?.img,
        gender: route.params?.gender,
        created: route.params?.created
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerItem}>
                    <Image style={styles.img} source={{ uri: results.img }}></Image>
                </View>
                <View style={styles.containerDescription}>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={{ color: 'white', fontSize: 26 }}>{results.name}</Text>
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={{ color: 'white', fontSize: 26 }}>{results.gender}</Text>
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={{ color: 'white', fontSize: 26 }}>{results.created}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
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
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 26
    }


})



export default Item