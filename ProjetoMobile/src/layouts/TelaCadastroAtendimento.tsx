import React, { useEffect, useId, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Pressable,
    Alert,
    FlatList,
} from 'react-native';
import { CadastroAtendimentoProps, CadastroClienteProps, CadastroUsuarioProps, HomeProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, PartialRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
import { IClientes } from '../models/lClientes';

export default ({ navigation, route }: CadastroAtendimentoProps) => {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [descricao, setDescricao] = useState('')
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

    const regex = /^\d{11}$/;
    const regel = /\S/
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    function validar(): boolean {
        if (!regex.test(cpf)) {
            return false
        }
        if (!regel.test(nome)) { return false }
        if (!regel.test(cpf)) { return false }
        if (!regel.test(data)) { return false }
        if (!regel.test(hora)) { return false }
        if (!regel.test(descricao)) { return false }


        return true;
    }

    function cadastrar() {
        if (!validar()) {
            return;
        }
        
        setIsLoading(true)

        firestore()
            .collection('atendimentos')
            .add({
                id,
                nome,
                cpf,
                data,
                hora,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Atendimento", "Atendimento com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))


    }

    function fazblabla(id: string, nome: string, cpf: string) {
        setId(id)
        setNome(nome)
        setCpf(cpf)
    }

    return (
        <>
            {/* <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/raca-de-gato-peludo.jpg',
                }} />
            </View > */}



            <View style={styles.container}>
                <Text>Cliente</Text>

                <Text style={styles.texto1}>ID: {id} </Text>
                <Text style={styles.texto1}>Nome: {nome} </Text>
                <Text style={styles.texto1}>Cpf: {cpf} </Text>

                <Pressable style={styles.botao} onPress={() => navigation.navigate("ListarCliente", { Selecionar: fazblabla })} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Procurar Cliente</Text>
                </Pressable>

            </View >

            <View style={styles.container}>
                <Text style={styles.texto1}>Data</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setData(text) }} />

                <Text style={styles.texto1}>Hora</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setHora(text) }} />

                <Text style={styles.texto1}>Descricao</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDescricao(text) }} />

                <Pressable style={styles.botao} onPress={() => cadastrar()} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Cadastrar</Text>
                </Pressable>
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
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
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