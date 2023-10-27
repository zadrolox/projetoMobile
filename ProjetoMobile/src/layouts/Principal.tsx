import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Image,
  Button,
} from 'react-native';
import ListaFlat from './ListaFlat';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import ListaSection from './ListaSection';
import { HomeProps } from '../types';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import Tela from './Tela_login';

// type AmorProps = {
//     name: string;
//   };

//   var ama = "a";

//   const EX01 = (props: AmorProps) => {
//     return (
//         <>
//       <View>
//         <Text>Oi eu qual vai ser o meu novo nome: o meu agora é {props.name}!</Text>
//         <TextInput 
//         style={{height: 40}}
//         placeholder="Caixa de texto"
//         onChangeText={newText => props.name}
//         />
//       </View>
//       </>
//     );
//   };

//   const EX1 = () => {
//     return (
//       <View>
//         <EX01 name = "${ama}" />
//       </View>
//     );
//   };

// const EX02 = {
//   uri: 'https://www.patasdacasa.com.br/sites/default/files/noticias/2019/10/gato-obeso-quando-o-aumento-de-peso-indica-um-problema-mais-serio.jpg',
//   width: 164,
//   height: 164
// }

// const EX2 = () => (
//   <ScrollView>
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={EX02} />
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={EX02} />
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={EX02} />
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={EX02} />
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={EX02} />
//   </ScrollView>
// );

// const EX3 = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{height: 40}}
//         placeholder="Digita aqui linda <3"
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text
//           .split(' ')
//           .map(word => word )
//           .join(' ')}
//       </Text>
//     </View>
//   );
// };

// const lista = [
//   { nome: 'gagagagagag' },
//   { nome: 'kleber' },
//   { nome: 'thiago' },
//   { nome: 'joão' },
// ]

// const listaflat = [
//   { key: 1, descricao: 'a' },
//   { key: 2, descricao: 'b' },
//   { key: 3, descricao: 'c' },
//   { key: 4, descricao: 'e' },
// ]

// const listaSection = [
//   { title: 'A', data: [{ key: 1, descricao: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK' }, { key: 2, descricao: 'Balu' }] },
//   { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
//   { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
//   { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
//   { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
//   { title: 'F', data: [{ key: 6, descricao: 'Fabio' }] },
// ]

//  var control = 1;

// const App2 = () => {
//   return (
//     <>
//       {/* <Ex1 titulo="Teste" />
//       <Ex2/>
//       <Ex3/> */}
//       <Ex4 array={lista} />
//       {/* <ListaSection array={listaSection} /> */}
//     </>
//   )
// }

const Principal = ({ navigation, route }: HomeProps) => {
  return (
    <View style={styles.container}>

      {/* <Pressable style={styles.botao} onPress={() => { navigation.navigate('CadastroUsuarioNota') }} >
        <Text style={{ fontSize: 50 }}>CadastrarNota</Text>
      </Pressable>
      <Pressable style={styles.botao} onPress={() => { navigation.navigate('ListarNotas') }} >
        <Text style={{ fontSize: 50 }}>ListarNotas</Text>
      </Pressable> */}

      <Pressable style={styles.botao} onPress={() => { navigation.navigate('CadastroCliente') }} >
        <Text style={{ fontSize: 50 }}>CadastrarCliente</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => { navigation.navigate('ListarCliente') }} >
        <Text style={{ fontSize: 50 }}>Listar Clientes</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  botao: {
    backgroundColor: 'green'
  },
})

export default Principal;