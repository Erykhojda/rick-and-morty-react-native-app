import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import LoadingPage from '../LoadingPage';
const MainItems = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [created, setCreated] = useState('');
    const [gender, setGender] = useState('');
    const [idCharacter, setIdCharacter] = useState();

    const URL = "https://rickandmortyapi.com/api/character"


    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        await fetch(URL)
            .then(response => response.json())
            .then(receivedData => setData(receivedData.results))
            .catch(err => err)
    }

    const sendData = () => {
        navigation.navigate('Item', { name: name, img: imgSrc, gender: gender, created: created, idCharacter: idCharacter });
    }
    return (

        < SafeAreaView style={styles.container} >
            <ScrollView
                // onContentSizeChange={(w, h) => alert(h)}
                // onMomentumScrollEnd={() => }
                contentContainerStyle={styles.containerScroll}>
                {data.map((character) =>
                    <TouchableOpacity onPressIn={() => {
                        setName(character.name)
                        setImgSrc(character.image)
                        setGender(character.gender)
                        setCreated(character.created)
                        setIdCharacter(uuidv4())
                    }}
                        onPress={sendData}

                    >

                        <View key={idCharacter} style={styles.containerImg}>

                            <Image style={styles.img} source={{ uri: character.image }}></Image>

                            <View style={styles.imgDescription}>
                                <View style={styles.containerName}>
                                    <Text style={styles.descriptionName}>
                                        {character.name}</Text>
                                </View>
                                <Text style={styles.descriptionText}>{character.status}</Text>
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
        backgroundColor: '#060606',
        margin: 10,
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
        height: 160,
        width: 160,
    },

    imgDescription: {
        alignItems: 'center',
        flexWrap: 'wrap',

    },

    containerName: {
        height: 40,
        width: '80%',
        justifyContent: 'center'
    },

    descriptionName: {
        color: 'white',
        fontSize: 14,
        marginVertical: 2,
        textAlign: 'center',
    },

    descriptionText: {
        color: 'gray'
    },
});

export default MainItems