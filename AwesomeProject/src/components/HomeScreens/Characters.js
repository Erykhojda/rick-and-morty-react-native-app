import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';


const MainItems = ({ navigation }) => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [created, setCreated] = useState('')
    const [gender, setGender] = useState('')

    const URL = "https://rickandmortyapi.com/api/character"

    // async function callApi() {
    //     try {
    //         const res = await fetch(URL)
    //         const data = await res.json()
    //         console.log(data)

    //         // for (let i = 0; i < data.results.name.lenght; i++)
    //         //     console.log(data.results[i].name)
    //         // console.log(dataApi)
    //     }
    //     catch {
    //         const err = console.err(err)
    //     }
    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        await fetch(URL)
            .then(response => response.json())
            .then(receivedData => setData(receivedData.results))
    }

    const fetchData = () => {
        navigation.navigate('Item', { name: name, img: imgSrc, gender: gender, created: created });
    }


    console.log(name)
    console.log(imgSrc)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.containerScroll}>
                    {data.map(character =>
                        <TouchableOpacity onPress={() => {
                            setName(character.name)
                            setImgSrc(character.image)
                            setGender(character.gender)
                            setCreated(character.created)
                            fetchData()
                        }}>
                            <View style={styles.containerImg}>
                                <View>
                                    <Image style={styles.img} source={{ uri: character.image }}></Image>
                                </View>
                                <View style={styles.imgDescription}>
                                    <Text style={styles.descriptionName}>{character.name}</Text>
                                    <Text style={styles.descriptionText}>{character.status}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
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

    containerScroll: {
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
        marginVertical: 4,
    },

    descriptionText: {
        color: 'gray'
    }

});

export default MainItems