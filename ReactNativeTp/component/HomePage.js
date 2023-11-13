import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RecettePage from './RecettePage';
import { CATEGORIES } from '../data/data';

const CarreArrondi = ({ categorie, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(categorie)} style={[styles.carre, { backgroundColor: categorie.color }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.titre}>{categorie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const data = CATEGORIES; 

  const handleCategoryPress = (category) => {
    navigation.navigate('Recette', { categoryId: category.id, categoryName: category.title });
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarreArrondi
            categorie={item}
            onPress={handleCategoryPress}
          />
        )}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Categories" component={HomeScreen} />
      <Stack.Screen name="Recette" component={RecettePage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  carre: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;
