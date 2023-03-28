import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/components/HomeScreen';
import Item from './src/components/HomeScreens/Item';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen options={{
          headerBackVisible: false,
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
