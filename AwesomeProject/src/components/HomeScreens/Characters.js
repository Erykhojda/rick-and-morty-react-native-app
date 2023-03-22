import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ExpoFastImage from 'expo-fast-image'


import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

const MainItems = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [dataNext, setDataNext] = useState([]);
    const [name, setName] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [locationName, setLocationName] = useState('')
    const [idCharacter, setIdCharacter] = useState();
    const [counter, setCounter] = useState(2);

    const URL = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        await fetch(URL)
            .then(response => response.json())
            .then(receivedData => setData(receivedData.results))
            .catch(err => err)
    }

    const loadDataNext = async () => {
        if (counter <= 42) {
            setCounter(count => count + 1);
            // console.log(counter)
        } else {
            alert('No More items')
        }
        await fetch(URL + `?page=${counter}`)
            .then(response => response.json())
            .then(receivedData => setDataNext(receivedData.results))
            .catch(err => err)
        setData([...data, ...dataNext])
    }

    const sendData = () => {
        navigation.navigate('Item', { name: name, img: imgSrc, gender: gender, status: status, locationName: locationName, idCharacter: idCharacter });
    }
    return (

        <SafeAreaView style={styles.container} >
            <ScrollView
                onMomentumScrollEnd={loadDataNext}

                contentContainerStyle={styles.containerScroll}>
                {data.map((character, index) =>
                    <TouchableOpacity onPressIn={() => {
                        setName(character.name)
                        setImgSrc(character.image)
                        setGender(character.gender)
                        setStatus(character.status)
                        setLocationName(character.location.name)
                        setIdCharacter(uuidv4())
                    }}
                        onPress={sendData}

                    >

                        <View key={idCharacter} style={styles.containerImg}>
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
            </ScrollView>

        </SafeAreaView >



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
    },

    descriptionText: {
        color: 'gray',
        paddingBottom: 10,
    },
});

export default MainItems