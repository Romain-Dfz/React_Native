import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import PokemonList from './components/PokemonList';
import PokemonDetailPage from './components/PokemonDetailPage.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="PokemonList" component={PokemonList} options={{ title: 'Pokedex'}}/>
        <Stack.Screen name="PokemonDetailPage" component={PokemonDetailPage} options={{ title: 'Pokemon'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
