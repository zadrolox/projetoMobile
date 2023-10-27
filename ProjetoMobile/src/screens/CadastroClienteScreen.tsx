import * as React from 'react';

import {View} from 'react-native';
import { CadastroClienteProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaCadastroCliente from '../layouts/TelaCadastroCliente';

const CadastroClienteScreen = ({navigation, route}: CadastroClienteProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaCadastroCliente navigation={navigation} route={route} />
            
        </View>
    )
}

export default CadastroClienteScreen;