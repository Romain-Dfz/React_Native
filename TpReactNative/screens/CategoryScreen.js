import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data';

const CategoryScreen = ({ navigation }) => {
  return (
    <View>
      {CATEGORIES.map(category => (
        <TouchableOpacity
          key={category.id}
          onPress={() => navigation.navigate('Recipes', { categoryId: category.id })}
        >
          <View style={{ backgroundColor: category.color, padding: 20, margin: 10 }}>
            <Text>{category.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryScreen;
