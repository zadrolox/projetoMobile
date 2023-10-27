import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    Alert,
    Pressable,
    StyleSheet,
} from 'react-native';
import { CadastroUsuarioNotaProps, } from '../types';
import firestore from "@react-native-firebase/firestore"

export default ({ navigation, route }: CadastroUsuarioNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function cadastrar() {
        setIsLoading(true)

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    return (
        <View>
            <Text>Titulo</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text>Descrição</Text>

            <TextInput
                multiline
                numberOfLines={4}
                maxLength={100}
                style={styles.caixa_texto}
                onChangeText={(text) => { setDescricao(text) }} />

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