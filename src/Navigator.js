import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import More from './More';
import PlayerNavigator from './PlayerNavigator';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Matches from './Matches';
import { createStackNavigator } from '@react-navigation/stack';
import NewsNavigator from './NewsNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="News" component={NewsNavigator} options={{headerShown:false}} />
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'rgb(0,45,114)' },
        tabBarLabelStyle: { fontSize: 13 },
        tabBarActiveTintColor: "rgb(255,237,0)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={"rgb(255,237,0)"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="basketball" color={"rgb(255,237,0)"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={25} color={"rgb(255,237,0)"} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={"rgb(255,237,0)"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;

