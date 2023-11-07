import React from 'react';
import { Modal, Text, View, TextInput, Button } from 'react-native';

const MaModal = ({ visible, closeModal, onAddArticle, article, onArticleChange }) => {
  const handleAddArticle = () => {
    onAddArticle(article); // Ajouter l'article en utilisant la fonction onAddArticle
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View>
        <View>
          <Image
            source={require('../images/caddie.png')}/>
          <Text>Ajouter un article</Text>
          <TextInput
            placeholder="Nom de l'article"
            value={article}
            onChangeText={onArticleChange}
          />
          <View>
            <Button title="Ajouter" onPress={handleAddArticle} /> {/* Utiliser la fonction handleAddArticle */}
            <Button title="Fermer" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MaModal;
