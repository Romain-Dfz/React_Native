// PokemonListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const PokemonListScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=10&limit=50')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error('Error fetching Pokemon list:', error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemonName: item.name })}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={pokemonList}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default PokemonListScreen;
