import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import Equipe from '../screens/Equipe';
import { Home } from '../screens/Home';
import { Insert } from '../screens/Insert';
import { Updade } from '../screens/UpdateDelete';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';


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
  const { logoutContext } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Insert') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <AntDesign name="pluscircleo" size={24} color="black" />;

            } else if (route.name === 'Equipe') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              return <FontAwesome5 name="user-astronaut" size={24} color="black" />;

            } else if (route.name === 'LOGOUT') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              return <FontAwesome name="trash" size={24} color="black" />;

            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              return <FontAwesome name="home" size={24} color="black" />;

            }
            // You can return any component that you like here!
            // return <FontAwesome name="home" size={24} color="black" />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}


        />

        <Tab.Screen name="Insert" component={Insert} options={{ headerShown: false }} />

        {/* <Tab.Screen name="Updade" component={Updade} options={{ headerShown: false }} /> */}

        <Tab.Screen name="Equipe" component={Equipe} options={{ headerShown: false }} />

        <Tab.Screen name="LOGOUT" component={() => logoutContext()} options={{ headerShown: false }} />

        {/* <Button title='LOGOUT' onPress={() => logoutContext()} /> */}
      </Tab.Navigator>
    </>
  );
};
