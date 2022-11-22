import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';
import Equipe from './src/screens/Equipe';
import { Insert } from './src/screens/Insert';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <StatusBar barStyle='light-content' hidden={false} backgroundColor='#0066CC' translucent={false} networkActivityIndicatorVisible={true} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
