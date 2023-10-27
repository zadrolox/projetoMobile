import * as React from 'react';

import {View} from 'react-native';
import { CadastroUsuarioProps } from '../types';
import TelaCadastroUsuario from '../layouts/TelaCadastroUsuario';

const CadastroUsuarioScreen = ({navigation, route}: CadastroUsuarioProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaCadastroUsuario navigation={navigation} route={route} />
        </View>
    )
}

export default CadastroUsuarioScreen;