import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, } from 'react-native';
import Principal from './layouts/Principal';

type RootStackParamList = {
    Home: undefined;
    Detalhes: undefined;
    Login: undefined;
    CadastroUsuario: undefined
    CadastroUsuarioNota: undefined
    ListarNotas: undefined
    TelaLogin: undefined
    CadastroCliente: undefined
    ListarCliente: undefined
    AlterarCliente: {id: string}
    CadastroAtendimento: undefined
  };
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
  
  type HomeScreenNavigationProp = HomeProps['navigation']
  
  type HomeScreenRouteProp = HomeProps['route']

  //login
  type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

  //Cadastro
  type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>

  //CadastroNota
  type CadastroUsuarioNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuarioNota'>

  //ListarNotas
  type ListarNotasProps = NativeStackScreenProps<RootStackParamList, "ListarNotas">

  //TelaLoginTrabalho
  type TelaLoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>

  //CadastroCliente
  type CadastroClienteProps = NativeStackScreenProps<RootStackParamList, 'CadastroCliente'>

  //ListarClientes
  type ListarClientesProps = NativeStackScreenProps<RootStackParamList, 'ListarCliente'>

  //AlterarClientes
  type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>

  //CadastroAtendimento
  type CadastroAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'CadastroAtendimento'>
  
  
  export type {HomeScreenNavigationProp, HomeScreenRouteProp, CadastroAtendimentoProps, AlterarClienteProps, ListarClientesProps, CadastroClienteProps,TelaLoginProps, HomeProps, RootStackParamList, ListarNotasProps, LoginProps, CadastroUsuarioProps, CadastroUsuarioNotaProps}