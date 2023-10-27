import * as React from 'react';

import {View} from 'react-native';
import { CadastroUsuarioNotaProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';
import TelaCadastroNota from '../layouts/TelaCadastroNota';

const CadastroUsuarioNotaScreen = ({navigation, route}: CadastroUsuarioNotaProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaCadastroNota navigation={navigation} route={route} />
            
        </View>
    )
}

export default CadastroUsuarioNotaScreen;