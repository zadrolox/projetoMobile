import * as React from 'react';

import {View} from 'react-native';
import { ListarNotasProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';
import TelaListarNotas from '../layouts/TelaListarNotas';

const ListarNotasScreen = ({navigation, route}: ListarNotasProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaListarNotas navigation={navigation} route={route} />
            
        </View>
    )
}

export default ListarNotasScreen;