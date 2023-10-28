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
import { CadastroClienteProps, CadastroUsuarioProps, HomeProps, ListarAtendimentoProps, ListarClientesProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, PartialRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
import { IClientes } from '../models/lClientes';
import { IAtendimentos } from '../models/lAtendimentos';

export default ({ navigation, route }: ListarAtendimentoProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const [atendimento, setAtendimento] = useState([] as IAtendimentos[])

    useEffect(() => {
        setIsLoading(true)

        const subscribe = firestore()
            .collection('atendimentos')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as IAtendimentos[]

                setAtendimento(data)
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

            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>

                <FlatList
                    data={atendimento}
                    renderItem={(info) => {
                        return (
                            <View style={styles.card}>
                                <Text>{info.index}</Text>
                                <Text>{info.item.nome}</Text>
                                <Text>{info.item.cpf}</Text>
                                <Text>{info.item.data}</Text>
                                <Text>{info.item.hora}</Text>
                                <Text>{info.item.descricao}</Text>
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
        color: 'white',
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