import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Locations = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Locations</Text></View>
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
})



export default Locations