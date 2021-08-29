import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Login, Signup, RedefinePass } from './view';

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Redefine Password"
          component={RedefinePass}
          options={{
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}