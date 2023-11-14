// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Lister les pokémons"
        onPress={() => navigation.navigate('PokemonList')}
      />
      <Button
        title="Afficher son pokédex"
        onPress={() => navigation.navigate('Pokedex')}
      />
    </View>
  );
};

export default HomeScreen;
