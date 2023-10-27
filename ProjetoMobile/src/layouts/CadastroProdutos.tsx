import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    Alert,
    Pressable,
    StyleSheet,
} from 'react-native';
import { CadastroProdutosProps, } from '../types';
import firestore from "@react-native-firebase/firestore"

export default ({ navigation, route }: CadastroProdutosProps) => {
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function cadastrar() {
        setIsLoading(true)

        firestore()
            .collection('produtos')
            .add({
                codigo,
                nome,
                preco,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Produto", "Cadastrado com sucesso")
                navigation.navigate('TelaInicial')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    return (
        <View>
            <Text>Codigo de Barras</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setCodigo(text) }} />

            <Text>Nome</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }} />

            <Text>Preço</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setPreco(text) }} />

            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isLoading} >
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
    },
    text_area: {
        borderWidth: 1,
        borderColor: 'grey'
    }
})