import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const contacts = [
  { id: 1, firstName: 'Romain', lastName: 'Defossez', age: 24 },
  { id: 2, firstName: 'Jade', lastName: 'Smith', age: 25 },
];

const ContactList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactDetails', { contact: item })}
      >
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.firstName} {item.lastName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default ContactList;
