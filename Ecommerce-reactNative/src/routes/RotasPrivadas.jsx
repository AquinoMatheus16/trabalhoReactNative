import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Header } from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import { Equipe } from '../screens/Equipe';
import { Home } from '../screens/Home';
import { Insert } from '../screens/Insert';
import { UpdateDelete } from '../screens/UpdateDelete';
import { FontAwesome, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import { Logout } from '../screens/Logout';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeTab' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='UpdateDeleteStack' component={UpdateDelete} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
};

export const RotasPrivadas = () => {
  const { logoutContext } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let iconColor;

            if (route.name === 'Insert') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              iconColor = focused ? 'red' : 'black';
              return <AntDesign name="pluscircleo" size={24} color={iconColor} />;

            } else if (route.name === 'Equipe') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              iconColor = focused ? 'red' : 'black';
              return <FontAwesome5 name="user-astronaut" size={24} color={iconColor} />;

            } else if (route.name === 'LOGOUT') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              iconColor = focused ? 'red' : 'black';
              return <Feather name="log-out" size={24} color={iconColor} />;

            } else if (route.name === 'Busca') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              iconColor = focused ? 'red' : 'black';
              return <FontAwesome name="home" size={24} color={iconColor} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Busca"
          component={HomeStack}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Insert"
          component={Insert}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Equipe"
          component={Equipe}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="LOGOUT"
          component={Logout}
          options={{ headerShown: false }}
        />

      </Tab.Navigator>
    </>
  );
};
