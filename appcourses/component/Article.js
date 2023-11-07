import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function Article(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          ...styles.articleItem,
          backgroundColor: pressed ? 'gray' : '#bf97c7',
        },
      ]}
      onPress={() => props.onPressDelete(props.item.id)}
    >
      <Text style={styles.articleText}>{props.item.text}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  articleItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ddbce3',
  },
  articleText: {
    color: 'white',
  },
});
