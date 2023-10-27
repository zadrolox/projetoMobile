import * as React from 'react';

import {View} from 'react-native';
import { LoginProps } from '../types';
import Tela_login from '../layouts/Tela_login';

const LoginScreen = ({navigation, route}: LoginProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <Tela_login navigation={navigation} route={route} />
        </View>
    )
}

export default LoginScreen;