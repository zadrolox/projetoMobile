import * as React from 'react';

import {View} from 'react-native';
import { CadastroClienteProps, ListarAtendimentoProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaCadastroCliente from '../layouts/TelaCadastroCliente';
import TelaListarAtendimento from '../layouts/TelaListarAtendimento';

const ListarAtendimentoScreen = ({navigation, route}: ListarAtendimentoProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaListarAtendimento navigation={navigation} route={route} />
            
        </View>
    )
}

export default ListarAtendimentoScreen;