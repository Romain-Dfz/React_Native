import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './component/ContactList';
import ContactDetails from './component/ContactDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} options={{ title: 'Liste des contacts' }} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} options={{ title: 'Détails du contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
