// PlayerNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Players from './Players';
import PlayerDetail from './PlayerDetail';

const Stack = createStackNavigator();

const PlayerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Players">
      <Stack.Screen name="Players" 
      component={Players} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="PlayerDetail" 
      component={PlayerDetail} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default PlayerNavigator;
