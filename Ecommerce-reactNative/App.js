import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Insert } from './src/screens/Insert';

export default function App() {
  return (
    <>
      <Insert />

      <StatusBar barStyle='light-content' hidden={false} backgroundColor='dodgerblue' translucent={false} networkActivityIndicatorVisible={true} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
