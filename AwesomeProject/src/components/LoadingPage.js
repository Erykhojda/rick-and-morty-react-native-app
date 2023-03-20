import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';


const LoadingPage = ({ navigation }) => {

    const [isLoad, setIsLoad] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoad(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isLoad) {
        navigation.navigate('HomeScreen');
    }
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