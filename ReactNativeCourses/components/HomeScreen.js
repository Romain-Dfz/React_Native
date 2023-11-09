import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
 
const HomeScreen = ({ route, navigation }) => {
  const { articles } = route.params || { articles: [] };
 
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
 
  return (
    <View>
      <Text>Accueil</Text>
      <Button
        title="Formulaire"
        onPress={() => navigation.navigate('Detail')}
      />
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}
 
export default HomeScreen;