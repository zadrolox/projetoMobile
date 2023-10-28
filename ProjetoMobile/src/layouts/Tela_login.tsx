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
    Image,
    Button,
    Pressable,
    Alert,
} from 'react-native';
import { HomeProps, LoginProps } from '../types';
import auth from '@react-native-firebase/auth';

const Tela = ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function logar() {
        setIsLoading(true)

        try {
            auth().signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('Home') })
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false))
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    function redefinirSenha() {
        auth().sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um Email pra voce"))
            .catch((error) => console.log(error))

    }


    return (
        <>
            <View style={styles.container_flex}>
                <Image style={styles.logo} source={{
                    uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/raca-de-gato-peludo.jpg',
                }} />
            </View >

            <View style={styles.container}>
                <Text style={styles.texto1}>Email</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setEmail(text) }} />
                <Text style={styles.texto2}>Senha</Text>
                <TextInput style={styles.caixa} onChangeText={(text) => { setSenha(text) }} />


                <Pressable style={styles.botao} onPress={() => logar()} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>Entrar</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={() => redefinirSenha()} disabled={isLoading}>
                    <Text style={{ fontSize: 50 }}>redefinirSenha</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={() => { navigation.navigate('CadastroUsuario') }} >
                    <Text style={{ fontSize: 50 }}>Cadastrar</Text>
                </Pressable>

                


            </View >
        </>
    )
}

export default Tela;

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
    }
});