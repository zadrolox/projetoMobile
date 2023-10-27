import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigation/home.navigator';


const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}

export default App;