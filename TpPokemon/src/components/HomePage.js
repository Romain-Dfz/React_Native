import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
  const navigation = useNavigation();
  
  const handleNavigateToPokedex = () => {
    navigation.navigate('PokemonList');
  };
  
  const handleNavigateToPokemonList = () => {
    /* LIEN BOUTON POKEMONS ATTENTE*/
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attrapez les tous, Pokémon !!!</Text>
      <View style={styles.header}>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.btn1]}
          onPress={handleNavigateToPokemonList}
          >
          <Text style={styles.buttonText}>Pokémons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.btn2]}
          onPress={handleNavigateToPokedex}
          >
          <Text style={styles.buttonText}>Pokédex</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {
    flex: 1,
  },
  btn1: {
    backgroundColor: '#51C0A9',
    width: 150,
    height: 75,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
  },
  btn2: {
    backgroundColor: '#78C4FE',
    width: 150,
    height: 75,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomePage;
