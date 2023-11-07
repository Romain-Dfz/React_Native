import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ResultDisplay from './ResultDisplay';
import CalculatorButton from './CalculatorButton';

class CalculatorApp extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      error: false,
    };
  }

  handleButtonPress = (button) => {
    if (button === '=') {
      this.calculateResult();
    } else if (button === 'C') {
      this.clearResult();
    } else {
      this.setState((prevState) => ({
        result: prevState.result + button,
        error: false,
      }));
    }
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.result);
      if (!isNaN(result)) {
        this.setState({ result: result.toString(), error: false });
      } else {
        this.setState({ result: 'Error', error: true });
      }
    } catch (error) {
      this.setState({ result: 'Error', error: true });
    }
  };

  clearResult = () => {
    this.setState({ result: '', error: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <ResultDisplay value={this.state.result} error={this.state.error} />
        <View style={styles.buttons}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button) => (
            <CalculatorButton
              key={button}
              label={button}
              onPress={this.handleButtonPress}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
});

export default CalculatorApp;
