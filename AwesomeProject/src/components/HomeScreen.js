import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


import Characters from './HomeScreens/Characters';
import Locations from './HomeScreens/Locations';
import Episodes from './HomeScreens/Episodes';
import Settings from './HomeScreens/Settings';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerStyle:
            {
                backgroundColor: '#090909',
            },
            headerTitleStyle: {
                fontSize: 26,
                color: 'white'
            },
        }}
        >

            <Tab.Screen name="Characters" component={Characters}
                options={{
                    headerTitleAlign: 'left',
                    tabBarLabel: 'characters',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={26} color={color} />),
                }}
            />
            <Tab.Screen name="Locations" component={Locations}
                options={{
                    headerTitleAlign: 'left',
                    tabBarLabel: 'Locations',

                    tabBarIcon: ({ color }) => (
                        <Ionicons name="location-outline" size={26} color={color} />),
                }}
            />
            <Tab.Screen name="Episodes" component={Episodes}
                options={{
                    headerTitleAlign: 'left',
                    tabBarLabel: 'Episodes',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="tv-outline" size={26} color={color} />),
                }} />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    headerTitleAlign: 'left',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={26} color={color} />),
                }} />
        </Tab.Navigator >
    )
}

export default HomeScreen