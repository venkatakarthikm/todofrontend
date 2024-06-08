import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import UserLogin from '../screens/UserLogin'; // renamed from PublisherLogin to UserLogin for clarity

const Stack = createStackNavigator();

function AuthStack({ onLogin }) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login">
        {(props) => <UserLogin {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
