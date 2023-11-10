import React from 'react';
import { View, Text } from 'react-native';
import { MEALS } from '../data';

const RecipesScreen = ({ route }) => {
  const { categoryId } = route.params;
  const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return (
    <View>
      {filteredMeals.map(meal => (
        // Afficher les informations de chaque recette ici
        <Text key={meal.id}>{meal.title}</Text>
      ))}
    </View>
  );
};

export default RecipesScreen;
