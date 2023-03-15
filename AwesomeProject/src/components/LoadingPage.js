import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';


const LoadingPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size="large" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoadingPage