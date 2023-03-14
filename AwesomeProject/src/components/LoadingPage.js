import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import LoadingPage from './src/components/LoadingPage';

const LoadingPage = () => {
    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoadingPage