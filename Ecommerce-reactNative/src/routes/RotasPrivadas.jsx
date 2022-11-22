import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Equipe from '../screens/Equipe';
import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Equipe' component={Equipe} />
    </Stack.Navigator>
  )
}

export const RotasPrivadas = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Equipe" component={Equipe} options={{
          headerStyle: {
            backgroundColor: '#2974be'
          },
          headerTitleAlign: "center",
          headerShown: false
        }} />
      </Tab.Navigator>
    </>
  );
};
