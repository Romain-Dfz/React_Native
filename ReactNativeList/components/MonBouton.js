import React from 'react';
import { Button, Text, View } from 'react-native';

const MonBouton = ({ title, onPress, articles }) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
      <Text>Liste des articles dans MonBouton :</Text>
      {articles.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default MonBouton;
