import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

import Tabs from './navigation/tabs';
import Header from './components/Head';
import HomeScreen from './components/Home'
import MeatScreen from './components/Meat'

const App = () => {
  return (
    <NavigationContainer
      tabBarOptions={{
        style: {
          elevation: 0,
        }
      }}
    > 
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;