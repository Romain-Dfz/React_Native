import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: windowWidth / 2.5,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  cardText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});

const PokemonList = () => {
  const navigation = useNavigation();
  const [pokemonList, setPokemonList] = useState([]);
  const [typeColors, setTypeColors] = useState({});

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        setPokemonList(response.data.results);

        const colors = {
          grass: '#78C850',
          fire: '#F08030',
          water: '#6890F0',
          bug: '#A8B820',
          normal: '#A8A878',
          poison: '#A040A0',
          electric: '#F8D030',
          ground: '#E0C068',
          fairy: '#EE99AC',
          fighting: '#C03028',
          psychic: '#F85888',
          rock: '#B8A038',
          ghost: '#705898',
          ice: '#98D8D8',
          dragon: '#7038F8',
          steel: '#B8B8D0',
          flying: '#A890F0',
        };

        setTypeColors(colors);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const PokemonDetails = ({ id, name, url }) => {
    const [details, setDetails] = useState({ types: [], image: '' });

    useEffect(() => {
      const fetchPokemonDetails = async () => {
        try {
          if (!url) {
            return;
          }

          const response = await axios.get(url);
          const types = response.data.types.map((type) => type.type.name);
          const image = response.data.sprites.front_default;

          setDetails({ types, image });
        } catch (error) {
          console.error('Error fetching Pokemon details:', error);
        }
      };

      fetchPokemonDetails();
    }, [url]);

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handlePress = () => {
      navigation.navigate('PokemonDetailPage', { id, name, details });
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.card, { backgroundColor: typeColors[details.types[0]] || '#ddd' }]}>
          <Text style={styles.cardText}>{capitalizeFirstLetter(name)}</Text>
          {details.image && <Image source={{ uri: details.image }} style={styles.cardImage} />}
          <Text style={styles.cardText}>{capitalizeFirstLetter(details.types.join(', '))}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemonList.map((item, index) => (
        <PokemonDetails key={item.name} id={index + 1} name={item.name} url={item.url} />
      ))}
    </ScrollView>
  );
};

export default PokemonList;
