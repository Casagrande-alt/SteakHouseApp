import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { Cardapio } from '../pages/Cardapio';
import { DetalhesPrato } from '../pages/DetalhesPrato'; // <-- Faltava essa linha

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen name="DetalhesPrato" component={DetalhesPrato} />
    </Stack.Navigator>
  );
}