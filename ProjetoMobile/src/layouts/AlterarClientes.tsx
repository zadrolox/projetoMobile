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
import { AlterarClienteProps, CadastroClienteProps, CadastroUsuarioProps, HomeProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, PartialRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"
import { IClientes } from '../models/lClientes';

export default ({ navigation, route }: AlterarClienteProps) => {
    const [id,] = useState(route.params.id)
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

    async function carregar() {
        setIsLoading(true)
        const Resultado = await firestore()
            .collection('clientes')
            .doc(id)
            .get()

        const cliente = {
            id: Resultado.id,
            ...Resultado.data()
        } as IClientes

        setNome(cliente.nome)
        setCpf(cliente.cpf)
        setRua(cliente.rua)
        setNumero(cliente.numero)
        setBairro(cliente.bairro)
        setComplemento(cliente.complemento)
        setCidade(cliente.cidade)
        setEstado(cliente.estado)
        setDataNasc(cliente.dataNasc)
        setIsLoading(false)
    }

    useEffect(() => {
        carregar()
    }, [])

    function alterar() {
        setIsLoading(true)

        firestore()
            .collection('clientes')
            .doc(id)
            .update({
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
                Alert.alert("Cliente", "Altarado com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    function deletarCliente (id: string) {
        setIsLoading(true)

        firestore()
        .collection('clientes')
        .doc(id)
        .delete()
        .then(() => {
            Alert.alert("Cliente", "Removido com sucesso")
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
                <TextInput value={nome} style={styles.caixa} onChangeText={(text) => { setNome(text) }} />

                <Text style={styles.texto1}>Cpf</Text>
                <TextInput value={cpf} style={styles.caixa} onChangeText={(text) => { setCpf(text) }} />

                <Text style={styles.texto1}>Rua</Text>
                <TextInput value={rua} style={styles.caixa} onChangeText={(text) => { setRua(text) }} />

                <Text style={styles.texto1}>Numero</Text>
                <TextInput value={numero} style={styles.caixa} onChangeText={(text) => { setNumero(text) }} />

                <Text style={styles.texto1}>Bairro</Text>
                <TextInput value={bairro} style={styles.caixa} onChangeText={(text) => { setBairro(text) }} />

                <Text style={styles.texto1}>Complemento</Text>
                <TextInput value={complemento} style={styles.caixa} onChangeText={(text) => { setComplemento(text) }} />

                <Text style={styles.texto1}>Cidade</Text>
                <TextInput value={cidade} style={styles.caixa} onChangeText={(text) => { setCidade(text) }} />

                <Text style={styles.texto1}>Estado</Text>
                <TextInput value={estado} style={styles.caixa} onChangeText={(text) => { setEstado(text) }} />

                <Text style={styles.texto1}>Data de Nascimento</Text>
                <TextInput value={dataNasc} style={styles.caixa} onChangeText={(text) => { setDataNasc(text) }} />


                <Pressable style={styles.botao} onPress={() => alterar()} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Alterar</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={() => deletarCliente(id)} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Deletar</Text>
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