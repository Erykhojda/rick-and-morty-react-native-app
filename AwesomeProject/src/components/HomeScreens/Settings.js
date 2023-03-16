import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Setting = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Setting</Text>
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
})

export default Setting