import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ExpoFastImage from 'expo-fast-image'


import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';

const MainItems = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoad, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [isLoadNext, setIsLoandNext] = useState(false)

    const URL = "https://rickandmortyapi.com/api/character/"


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(URL + `?page=${page}`);
                const json = await response.json();
                const data = json.results
                setData((prevState => [...prevState, ...data]));
                setIsLoading(true);
                setIsLoandNext(true)
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                setIsLoandNext(false)

            }
        }
        fetchData();
    }, [page]);

    function handleLoadMore() {
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);

    }


    const sendData = (character, index) => {
        navigation.navigate('Item', { name: character.name, img: character.image, gender: character.gender, status: character.status, locationName: character.location.name, idCharacter: index });
    }
    return (
        <>
            <SafeAreaView style={styles.container} >
                {!isLoadNext ? <ActivityIndicator size="large" /> :

                    <ScrollView
                        // onMomentumScrollEnd={handleLoadMore}
                        contentContainerStyle={styles.containerScroll}>
                        {data.map((character, index) =>
                            <TouchableOpacity key={index}
                                onPress={() => sendData(character, index)}
                            >

                                <View style={styles.containerImg}>
                                    <ExpoFastImage
                                        style={styles.img}
                                        source={{
                                            uri: character.image,
                                            cacheKey: index
                                        }}
                                    />
                                    <View style={styles.imgDescription}>
                                        <View style={styles.containerName}>
                                            <Text style={styles.descriptionName}>
                                                {character.name}</Text>
                                        </View>
                                        <Text style={styles.descriptionText}>Status: {character.status}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                        <Pressable style={styles.btnNext} onPress={handleLoadMore}><Text style={styles.textBtn}>Next Page</Text></Pressable>

                    </ScrollView>
                }

            </SafeAreaView >
            {!isLoad ? <ActivityIndicator size="large" /> : null}

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

    containerScroll: {
        flexDirection: 'row',
        backgroundColor: '#090909',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },

    containerImg: {
        flexBasis: '40%',
        backgroundColor: '#060606',
        marginBottom: 10,
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
        height: 170,
        width: 170,
    },

    imgDescription: {
        alignItems: 'center',
        flexWrap: 'wrap',

    },

    containerName: {
        height: 60,
        width: '50%',
        justifyContent: 'center'
    },

    descriptionName: {
        color: 'white',
        fontSize: 16,
        marginVertical: 2,
        textAlign: 'center',
        width: 120,
    },

    descriptionText: {
        color: 'gray',
        paddingBottom: 10,
    },

    btnNext: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 160,
        backgroundColor: 'gray',
        borderRadius: 25,
        marginBottom: 8
    },
    textBtn: {
        fontSize: 18
    }
});

export default MainItems