import * as React from 'react';

import {View} from 'react-native';
import { CadastroAtendimentoProps, CadastroClienteProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaCadastroCliente from '../layouts/TelaCadastroCliente';
import TelaCadastroAtendimento from '../layouts/TelaCadastroAtendimento';

const CadastroAtendimentoScreen = ({navigation, route}: CadastroAtendimentoProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaCadastroAtendimento navigation={navigation} route={route} />
            
        </View>
    )
}

export default CadastroAtendimentoScreen;