import React, { useEffect, useState } from 'react';
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
    Image,
    Button,
    Pressable,
    Alert,
    FlatList,
} from 'react-native';
import { CadastroClienteProps, CadastroUsuarioProps, HomeProps, ListarClientesProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, PartialRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
import { IClientes } from '../models/lClientes';

export default ({ navigation, route }: ListarClientesProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const [cliente, setCliente] = useState([] as IClientes[])

    useEffect(() => {
        setIsLoading(true)

        const subscribe = firestore()
            .collection('clientes')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as IClientes[]

                setCliente(data)
                setIsLoading(false)
            })

        return () => subscribe()
    }, [])


    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/raca-de-gato-peludo.jpg',
                }} />
            </View >

            <View  style={{flex:1}}>
                <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>
                
                <FlatList
                    data={cliente}
                    renderItem={(info) => {
                        return (
                            <View style={styles.card}>
                                <Text>{info.index}</Text>
                                <Text>{info.item.nome}</Text>
                                <Text>{info.item.cpf}</Text>
                                <Text>{info.item.rua}</Text>
                                <Text>{info.item.numero}</Text>
                                <Text>{info.item.bairro}</Text>
                                <Text>{info.item.complemento}</Text>
                                <Text>{info.item.cidade}</Text>
                                <Text>{info.item.estado}</Text>
                                <Text>{info.item.dataNasc}</Text>

                                <Pressable 
                                onPress={ () => navigation.navigate('AlterarCliente', {id: info.item.id})}>
                                    <Text style={{ height: 20, backgroundColor: 'red'}}>Alterar Cliente</Text></Pressable>
                            </View>
                        );
                    }}>

                </FlatList>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    texto1: {
        color: 'black',
        fontSize: 20
    },
    texto2: {
        color: 'black'
    },
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'red'
    },
    container_flex: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_fixo: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'red'
    },
    item: {
        padding: 10,
        fontsize: 18,
        height: 44,
    },
    caixa: {
        backgroundColor: 'grey',
        borderWidth: 2,
        borderColor: 'black'
    },
    botao: {
        backgroundColor: 'green'
    },
    logo: {
        justifyContent: 'center',
        width: 150,
        height: 150
    },
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3
    }
})