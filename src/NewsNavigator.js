import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import News from './News';

const Stack = createStackNavigator();

const NewsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
      component={Home} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="News" 
      component={News} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;