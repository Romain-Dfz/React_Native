import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ResultDisplay = ({ value }) => {
  return <Text style={styles.result}>{value}</Text>;
};

const styles = StyleSheet.create({
  result: {
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 280,
    color: 'black'
  },
});

export default ResultDisplay;
