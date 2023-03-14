import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const URL = "https://rickandmortyapi.com/api/character"

async function callApi() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)
    }
    catch {
        const err = console.err(err)
    }

}
callApi()

const MainItems = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerImg}>
                    <View>
                        <Image style={styles.img} source={require('../assets/favicon.png')}></Image>
                    </View>
                    <View style={styles.imgDescription}>
                        <Text style={styles.descriptionName}>Rick i Morty</Text>
                        <Text style={styles.descriptionText}>zfvvr</Text>
                    </View>
                </View>
                <View style={styles.containerImg}>
                    <View>
                        <Image style={styles.img} source={require('../assets/favicon.png')}></Image>
                    </View>
                    <View style={styles.imgDescription}>
                        <Text style={styles.descriptionName}>Rick i Morty</Text>
                        <Text style={styles.descriptionText}>zfvvr</Text>
                    </View>

                </View>
                <View style={styles.containerImg}>
                    <View>
                        <Image style={styles.img} source={require('../assets/favicon.png')}></Image>
                    </View>
                    <View style={styles.imgDescription}>
                        <Text style={styles.descriptionName}>Rick i Morty</Text>
                        <Text style={styles.descriptionText}>zfvvr</Text>
                    </View>

                </View>
                <View style={styles.containerImg}>
                    <View>
                        <Image style={styles.img} source={require('../assets/favicon.png')}></Image>
                    </View>
                    <View style={styles.imgDescription}>
                        <Text style={styles.descriptionName}>Rick i Morty</Text>
                        <Text style={styles.descriptionText}>zfvvr</Text>
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
        backgroundColor: '#090909',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    containerImg: {
        flexBasis: '44%',
        backgroundColor: '#060606',
        margin: 10,
        fontSize: 12,
        alignItems: 'center',
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
        shadowColor: "gray",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },

    img: {
        height: 150,
        width: 150,
    },

    imgDescription: {
        alignItems: 'center'
    },

    descriptionName: {
        color: 'white',
        fontSize: 16,
        marginVertical: 4
    },

    descriptionText: {
        color: 'gray'
    }

});

export default MainItems