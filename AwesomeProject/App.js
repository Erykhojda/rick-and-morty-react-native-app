import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/components/HomeScreen';
import LoadingPage from './src/components/LoadingPage';
import Item from './src/components/HomeScreens/Item';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShadowVisible: false
      }}>
        <Stack.Screen options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
          name="LoginScreen" component={LoadingPage} />
        <Stack.Screen options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
          name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
          name="Item" component={Item} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
