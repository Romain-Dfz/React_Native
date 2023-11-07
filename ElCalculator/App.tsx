import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ResultDisplay from './components/ResultDisplay';
import CalculatorButton from './components/CalculatorApp';
import CalculatorApp from './components/CalculatorApp';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>El Calculator</Text>
      <Image source={require('./images/jack.jpg')} />
      <CalculatorApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    color: 'black',
  }
});

export default App;
