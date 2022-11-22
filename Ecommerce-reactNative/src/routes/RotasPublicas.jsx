import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { RotasPrivadas } from './RotasPrivadas';

const Stack = createNativeStackNavigator()

export const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: "MEU LOGIN", headerShown: false }} />
      <Stack.Screen name="Privado" component={RotasPrivadas} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
