import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/data';

const RecettePage = ({ route }) => {
  const navigation = useNavigation();
  const categoryId = route.params?.categoryId;
  const categoryName = route.params?.categoryName;

  const recipesForCategory = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{`Recettes de la catégorie ${categoryName}`}</Text>
      {recipesForCategory.map((recipe) => (
        <TouchableOpacity
          key={recipe.id}
          style={styles.recipeContainer}
          onPress={() => {
            navigation.navigate('DetailsRecette', {
              imageUrl: recipe.imageUrl,
              title: recipe.title,
              ingredients: recipe.ingredients,
              steps: recipe.steps,
            });
          }}
        >
          <Text>{recipe.title}</Text>
          <Image
            source={{ uri: recipe.imageUrl }}
            style={styles.recipeImage}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  recipeContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: width - 20,
  },
  recipeImage: {
    width: width - 40,
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default RecettePage;
