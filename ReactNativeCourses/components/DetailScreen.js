import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
 
const DetailScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { articles, setArticles } = route.params || { articles: [], setArticles: () => {} };
 
  const saveArticle = () => {
    const newArticle = { title, description };
    setArticles([...articles, newArticle]);
 
    // Réinitialisez les champs du formulaire après avoir enregistré les données
    setTitle('');
    setDescription('');
  };
 
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
 
  return (
    <View>
      <Text>Formulaire de l'article</Text>
      <TextInput
        placeholder="Titre"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button
        title="Enregistrer l'article"
        onPress={saveArticle}
      />
 
      <Text>Liste des articles précédents :</Text>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
 
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
 
export default DetailScreen;