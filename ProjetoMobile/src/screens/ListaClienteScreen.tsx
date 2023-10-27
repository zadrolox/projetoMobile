import * as React from 'react';

import {View} from 'react-native';
import { CadastroClienteProps, ListarClientesProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaCadastroCliente from '../layouts/TelaCadastroCliente';
import TelaListarClientes from '../layouts/TelaListarClientes';

const ListarClienteScreen = ({navigation, route}: ListarClientesProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaListarClientes navigation={navigation} route={route} />
            
        </View>
    )
}

export default ListarClienteScreen;