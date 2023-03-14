import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const MainItem = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerItem}>
                </View>
                <View style={styles.itemDescription}>
                    <Text>fjdbcjhdfb</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    containerItem: {
        height: 300,
        width: 300,
        backgroundColor: '#060606',
        marginVertical: 20,
        borderRadius: 6
    },

    itemDescription: {
        height: 100,
        width: 200,
        backgroundColor: '#060606',
        borderRadius: 6
    }
})



export default MainItem