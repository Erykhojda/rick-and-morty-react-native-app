import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


// import Item from './HomeScreens/Item';
import Characters from './HomeScreens/Characters';
import Locations from './HomeScreens/Locations';
import Episodes from './HomeScreens/Episodes';
import Settings from './HomeScreens/Settings';

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Characters" component={Characters}
                options={{
                    tabBarLabel: 'Characters',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={26} color={color} />),
                }}
            />
            <Tab.Screen name="Locations" component={Locations}
                options={{
                    tabBarLabel: 'Locations',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="location-outline" size={26} color={color} />),
                }}
            />
            <Tab.Screen name="Episodes" component={Episodes}
                options={{
                    tabBarLabel: 'Episodes',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="tv-outline" size={26} color={color} />),
                }} />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={26} color={color} />),
                }} />
        </Tab.Navigator >
    )
}

export default HomeScreen