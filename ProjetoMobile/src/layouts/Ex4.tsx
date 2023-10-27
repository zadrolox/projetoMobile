import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

type ListaFlatProps = {
    array: {nome: string}[]
}

const ListaFlat = (props: ListaFlatProps) => {
    return < FlatList
    data={props.array}
    renderItem={({item}) => (<>
        <Text>Titulo do {item.nome}</Text>
        <Text style={styles.item}>{item.nome}</Text>
        <TextInput 
        style={styles.caixa}
        placeholder= {`Caixa de texto do ${item.nome} `} />
        </>)}
    
    />
}

export default ListaFlat;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontsize: 18,
        height: 44,
    },
    caixa: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10
    }
});