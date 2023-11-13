import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsRecettePage = ({ route }) => {
  const navigation = useNavigation();
  const { imageUrl, title, ingredients, steps } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.recipeImage} />
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>Ingrédients :</Text>
      <Text style={styles.text}>{ingredients.join('\n')}</Text>

      <Text style={styles.subtitle}>Étapes :</Text>
      <Text style={styles.text}>{steps.join('\n')}</Text>

      {/* Bouton arrière */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <Text style={styles.goBackButtonText}>Revenir en arrière</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  recipeImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: "black",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
    color: "#deb5a4",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    margin: 20,
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsRecettePage;
