import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
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
