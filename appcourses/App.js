import { Button, FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import ModalInput from './component/ModalInput';
import Article from './component/Article';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [articles, setArticles] = useState([]);

    function addArticle(article) {
        setArticles(articlesCurrent => [
            ...articlesCurrent,
            { text: article, id: Math.random().toString() }
        ]);
        setModalIsVisible(false);
    }

    function deleteArticle(id) {
        setArticles(articlesCurrent => articlesCurrent.filter(article => article.id !== id));
    }

    function closeModale() {
        setModalIsVisible(false);
    }

    function openModale() {
        setModalIsVisible(true);
    }

    return (
        <View style={styles.container}>
            <Button title='Add Article' onPress={openModale} color="#f075e8" />
            <ModalInput visible={modalIsVisible} closeModale={closeModale} addArticle={addArticle} />
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <Article item={item} onPressDelete={deleteArticle} />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: "#cfcfcf",
    }
});
