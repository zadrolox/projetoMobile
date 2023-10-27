import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, } from 'react-native';
import Principal from '../layouts/Principal';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import { RootStackParamList } from '../types';
import LoginScreen from '../screens/LoginScreen';
import CadastroUsuarioScreen from '../screens/CadastroUsuarioScreen';
import CadastroUsuarioNotaScreen from '../screens/CadastroUsuarioNotaScreen';
import ListarNotasScreen from '../screens/ListarNotasScreen';
import TelaLoginScreen from '../screens/TelaLoginScreen'
import CadastroClienteScreen from '../screens/CadastroClienteScreen';
import ListarClienteScreen from '../screens/ListaClienteScreen';
import AlterarClienteScreen from '../screens/AlterarClienteScreen';
import CadastroAtendimentoScreen from '../screens/CadastroAtendimentoScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TelaLogin">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
      <Stack.Screen name="CadastroUsuarioNota" component={CadastroUsuarioNotaScreen} />
      <Stack.Screen name="ListarNotas" component={ListarNotasScreen} />
      <Stack.Screen name="TelaLogin" component={TelaLoginScreen} />
      <Stack.Screen name="CadastroCliente" component={CadastroClienteScreen} />
      <Stack.Screen name="ListarCliente" component={ListarClienteScreen} />
      <Stack.Screen name="AlterarCliente" component={AlterarClienteScreen} />
      <Stack.Screen name="CadastroAtendimento" component={CadastroAtendimentoScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;