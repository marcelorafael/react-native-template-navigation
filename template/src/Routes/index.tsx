// In App.js in a new project

import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';


function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  },[])

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}

export default Routes;