import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/components/HomeScreen';
import LoadingPage from './src/components/LoadingPage';


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
      {isLoad ? <LoadingPage /> : <HomeScreen />}
    </NavigationContainer>
  );
}


