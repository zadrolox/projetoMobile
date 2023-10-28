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
import { CadastroClienteProps, CadastroUsuarioProps, HomeProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, PartialRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
import { IClientes } from '../models/lClientes';

export default ({ navigation, route }: CadastroClienteProps) => {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [dataNasc, setDataNasc] = useState('')
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
        if (!regel.test(rua)) { return false }
        if (!regel.test(numero)) { return false }
        if (!regel.test(bairro)) { return false }
        if (!regel.test(complemento)) { return false }
        if (!regel.test(cidade)) { return false }
        if (!regel.test(estado)) { return false }
        if (!regexData.test(dataNasc)) { return false }


        return true;
    }

    function cadastrar() {
        if (!validar()) {
            return;
        }


        setIsLoading(true)

        firestore()
            .collection('clientes')
            .add({
                nome,
                cpf,
                rua,
                numero,
                bairro,
                complemento,
                cidade,
                estado,
                dataNasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }



    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/raca-de-gato-peludo.jpg',
                }} />
            </View >

            <ScrollView style={styles.container}>
                <Text style={styles.texto1}>Nome</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setNome(text) }} />


                <Text style={styles.texto1}>Cpf</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setCpf(text) }} />


                <Text style={styles.texto1}>Rua</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setRua(text) }} />
                <Text style={styles.texto1}>Numero</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setNumero(text) }} />
                <Text style={styles.texto1}>Bairro</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setBairro(text) }} />
                <Text style={styles.texto1}>Complemento</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setComplemento(text) }} />
                <Text style={styles.texto1}>Cidade</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setCidade(text) }} />
                <Text style={styles.texto1}>Estado</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setEstado(text) }} />
                <Text style={styles.texto1}>Data de Nascimento</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setDataNasc(text) }} />


                <Pressable style={styles.botao} onPress={() => cadastrar()} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Cadastrar</Text>
                </Pressable>

            </ScrollView >


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