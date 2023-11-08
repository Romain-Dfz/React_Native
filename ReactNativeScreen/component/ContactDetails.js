import React from 'react';
import { View, Text } from 'react-native';

const ContactDetails = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text>Nom: {contact.lastName}</Text>
      <Text>Prénom: {contact.firstName}</Text>
      <Text>Âge: {contact.age}</Text>
    </View>
  );
};

export default ContactDetails;
