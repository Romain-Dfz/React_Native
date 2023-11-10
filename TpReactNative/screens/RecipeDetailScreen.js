import React from 'react';
import { View, Text } from 'react-native';
import { MEALS } from '../data';

const RecipeDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      {/* Afficher les détails de la recette ici */}
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default RecipeDetailScreen;
