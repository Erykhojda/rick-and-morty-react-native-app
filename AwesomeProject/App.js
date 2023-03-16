import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/components/HomeScreen';
import LoadingPage from './src/components/LoadingPage';

// const Stack = createNativeStackNavigator();


export default function App() {
  const [isLoad, setIsLoad] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen options={{
          title: '',
        }} name="HomeScreen" component={HomeScreen} /> */}
      {isLoad ? <LoadingPage /> : <HomeScreen />}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}
