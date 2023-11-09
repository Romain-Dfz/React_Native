import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const WeatherInterface = () => {
  const [city, setCity] = useState('');

  const handleGetCity = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=FI68G750xgupZAbJYGy4ddVz73PtZKb1&q=${latitude}%2C${longitude}`
          ); 
          const data = response.data;
          setCity(data.LocalizedName);
        } catch (error) {
          console.error(error);
        }
      },
      error => {
        console.error(error);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Get City" onPress={handleGetCity} />
      {city !== '' && (
        <Text style={styles.cityText}>City: {city}</Text>
      )}
    </View>
  );
};

export default WeatherInterface;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 18,
    marginTop: 20,
  },
});