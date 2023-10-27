import * as React from 'react';

import {View} from 'react-native';
import { TelaLoginProps } from '../types';
import TelaLogin from '../layouts/TelaLogin';

const LoginScreen = ({navigation, route}: TelaLoginProps) => {
    return (
        <View style={{
            flex:1
        }}
        >
            <TelaLogin navigation={navigation} route={route} />
        </View>
    )
}

export default LoginScreen;