import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CalculatorButton = ({ label, onPress }) => {
  return (
    <Pressable
      style={[styles.button,styles.numberButton,styles.symbolButton]}
      onPress={() => onPress(label)}
    >
      {({ pressed }) => (
        <Text style={[styles.buttonText, { opacity: pressed ? 0.6 : 1 }]}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '24%',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 30,
    margin: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  numberButton: {
    backgroundColor: 'white',
    padding: 30,
  },
  symbolButton: {
    backgroundColor: '#f0f0f0'
  }
});

export default CalculatorButton;
