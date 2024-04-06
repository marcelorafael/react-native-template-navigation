import React from 'react';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginPresentation from '../../presentation/LoginPresentation';
import RegisterUserPresentation from '../../presentation/RegisterUserPresentation';

export default function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E97812' },
            }}
        >
            <Stack.Screen
                name="LoginPresentation"
                component={LoginPresentation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterUserPresentation"
                component={RegisterUserPresentation}
                options={{
                    title: 'Cadastro de Usuário',
                    headerShown: true,
                  }}
            />
        </Stack.Navigator>
    );
}