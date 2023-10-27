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
  FlatList
} from 'react-native';

type ListaFlatProps = {
    array: {key: number; descricao: string}[]
}

const ListaFlat = (props: ListaFlatProps) => {
    return < FlatList
    data={props.array}
    renderItem={({item}) => (
        <Text style={styles.item}>{item.descricao}</Text>)}
    
    />
}

export default ListaFlat;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontsize: 18,
        height: 44,
    }
});