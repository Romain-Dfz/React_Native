// PokemonDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const PokemonDetailScreen = ({ navigation }) => {
  const pokemonName = navigation.getParam('pokemonName', 'No Pokemon');

  return (
    <View>
      <Text>Details for {pokemonName}</Text>
    </View>
  );
};

export default PokemonDetailScreen;
