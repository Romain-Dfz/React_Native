import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MonBouton from './components/MonBouton';
import MaModal from './components/MaModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [article, setArticle] = useState('');
  const [articles, setArticles] = useState<string[]>([]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addArticle = () => {
    if (article.trim() !== '') {
      setArticles([...articles, article]);
      setArticle('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Liste des articles :</Text>
      {articles.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <MonBouton title="Ajouter un article" onPress={openModal} articles={articles} />
      <MaModal
        visible={modalVisible}
        closeModal={closeModal}
        onAddArticle={addArticle}
        article={article}
        onArticleChange={(text: string) => setArticle(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
