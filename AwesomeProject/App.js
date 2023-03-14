import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import LoadingPage from './src/components/LoadingPage';
import MainItems from './src/components/MainItems';
import MainItem from './src/components/MainItem'


export default function App() {
  return (
    <>
      <MainItems />
      {/* <MainItem /> */}
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#000',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
