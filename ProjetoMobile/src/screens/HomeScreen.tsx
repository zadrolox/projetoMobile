import * as React from 'react';
import { Text, View, Image } from 'react-native';

import Principal from '../layouts/Principal';
import { HomeProps } from '../types';
import Ex2 from '../layouts/Ex2';

const HomeScreen = ({ navigation, route }: HomeProps) => {
  return (
    <View style={{
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center'
    }}>
      <Principal navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;