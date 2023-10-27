import * as React from 'react';

import {View} from 'react-native';
import { AlterarClienteProps, CadastroClienteProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaCadastroCliente from '../layouts/TelaCadastroCliente';
import AlterarClientes from '../layouts/AlterarClientes';

const AlterarClienteScreen = ({navigation, route}: AlterarClienteProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <AlterarClientes navigation={navigation} route={route} />
            
        </View>
    )
}

export default AlterarClienteScreen;