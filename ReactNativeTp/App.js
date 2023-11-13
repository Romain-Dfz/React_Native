import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecettePage from './component/RecettePage'
import HomePage from './component/HomePage'
import DetailsRecettePage from './component/DetailRecettePage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Recette" component={RecettePage} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsRecette" component={DetailsRecettePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
