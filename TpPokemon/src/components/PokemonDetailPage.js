import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const PokemonDetailPage = ({ route }) => {
  const { id, details } = route.params;
  const [additionalDetails, setAdditionalDetails] = useState({ height: 0, weight: 0, evolutions: [] });

  useEffect(() => {
    const fetchAdditionalDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const height = response.data.height / 10;
        const weight = response.data.weight / 10;

        const speciesUrl = response.data.species.url;
        const speciesResponse = await axios.get(speciesUrl);
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);

        const evolutions = await parseEvolutions(evolutionChainResponse.data.chain);

        setAdditionalDetails({ height, weight, evolutions });
      } catch (error) {
        console.error('Error fetching additional details:', error);
      }
    };

    fetchAdditionalDetails();
  }, [id]);

  const getEvolutionDetails = async (url) => {
    try {
      const response = await axios.get(url);

      if (!response.data.sprites || !response.data.sprites.front_default) {
        return { image: 'URL_DE_VOTRE_IMAGE_PAR_DEFAUT' };
      }

      const image = response.data.sprites.front_default;
      return { image };
    } catch (error) {
      console.error('Error fetching evolution details:', error);
      return { image: 'URL_DE_VOTRE_IMAGE_PAR_DEFAUT' };
    }
  };

  const parseEvolutions = async (chain) => {
    let evolutions = [];

    if (chain && chain.species) {
      const evolutionDetails = await getEvolutionDetails(`https://pokeapi.co/api/v2/pokemon/${chain.species.name}`);
      evolutions.push({ name: capitalizeFirstLetter(chain.species.name), image: evolutionDetails.image });
    }

    if (chain && chain.evolves_to) {
      for (const evolution of chain.evolves_to) {
        const nestedEvolutions = await parseEvolutions(evolution);
        evolutions = evolutions.concat(nestedEvolutions);
      }
    }

    return evolutions;
  };

  const parseEvolutionChain = async (evolutionChain) => {
    if (evolutionChain) {
      return await parseEvolutions(evolutionChain);
    }
    return [];
  };

  const getTypeStyle = (type) => {
    return styles[type.toLowerCase()] || {};
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={[getTypeStyle(details?.types[0]), styles.couleur]}>
          <Text style={[styles.text, styles.boldtext, styles.titre]}>{capitalizeFirstLetter(route.params.name)}</Text>
          <View style={styles.centre}>
            <Image source={{ uri: details?.image }} style={styles.image} />
            <Text style={[styles.text, styles.boldtext]}>
              {capitalizeFirstLetter(details?.types?.join(', '))}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailsContainer}>
          <Text style={[styles.text, styles.boldtext]}>Détails :</Text>
          <View style={styles.poidtaille}>
            <Text style={styles.text}>Height: {additionalDetails.height} m </Text>
            <Text style={styles.text}>Weight: {additionalDetails.weight} kg</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={[styles.text, styles.boldtext]}>Evolutions:</Text>
        <View style={styles.evolutionContainer}>
          {additionalDetails.evolutions.map((evolution, index) => (
            <View style={styles.evolutionItem} key={index}>
              <Text style={styles.text}>{capitalizeFirstLetter(evolution.name)}</Text>
              <Image source={{ uri: evolution.image }} style={styles.evolutionImage} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  titre: {
    marginTop: 10,
  },
  boldtext: {
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -25,
  },
  centre: {
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  evolutionContainer: {
    alignItems: 'center',
  },
  evolutionItem: {
    marginBottom: 10,
    width: '100%',
  },
  evolutionImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
    marginBottom: 10,
  },
  poidtaille: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
  },
  couleur: {
    width: '100%',
  },
  grass: {
    backgroundColor: '#4CAF50',
  },
  fire: {
    backgroundColor: '#FF5722',
  },
  water: {
    backgroundColor: '#2196F3',
  },
  bug: {
    backgroundColor: '#A8B820',
    opacity: 0.8,
  },
  normal: {
    backgroundColor: '#A8A878',
    opacity: 0.8,
  },
  poison: {
    backgroundColor: '#A040A0',
    opacity: 0.8,
  },
  electric: {
    backgroundColor: '#F8D030',
  },
  ground: {
    backgroundColor: '#E0C068',
    opacity: 0.8,
  },
  fairy: {
    backgroundColor: '#EE99AC',
    opacity: 0.8,
  },
  fighting: {
    backgroundColor: '#C03028',
    opacity: 0.8,
  },
  psychic: {
    backgroundColor: '#F85888',
    opacity: 0.8,
  },
  rock: {
    backgroundColor: '#B8A038',
    opacity: 0.8,
  },
  ghost: {
    backgroundColor: '#705898',
    opacity: 0.8,
  },
  ice: {
    backgroundColor: '#98D8D8',
    opacity: 0.8,
  },
  dragon: {
    backgroundColor: '#7038F8',
    opacity: 0.8,
  },
  steel: {
    backgroundColor: '#B8B8D0',
    opacity: 0.8,
  },
  flying: {
    backgroundColor: '#A890F0',
    opacity: 0.8,
  },
});

export default PokemonDetailPage;
