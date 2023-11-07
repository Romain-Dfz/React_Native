import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";
import TestModal from "./TestModal"

export default function FirstDemo(){

    const [textInput,setTextInput]= useState('')
    const [modalVisible,setModalVisible]= useState('')

    function RecupInput(enterText){
        setTextInput(enterText)
        console.log(textInput)
    }

    function MessageConsole(){
        console.log("Clique sur le bouton")
        setModalVisible(true)
    }
    
    function closeModal(){
        console.log("fermeture modal")
        setModalVisible(false)
    }

    const tab = [
        { text: "toto", id: 1},
        { text: "tata", id: 2},
        { text: "titi", id: 3},
    ]

    return(
        <View style={styles.container}>
            <Text style={[styles.monTexte,styles.tailleTexte]}>Mon premier composant React native</Text>
            <TextInput onChangeText={RecupInput} value={textInput}/>
            <Button title="Bouton" onPress={MessageConsole}/>
            <TestModal visible={modalVisible} closeModal={closeModal}></TestModal>
            <FlatList data={tab} renderItem={(itemData) => {
                return (
                    <View>
                        <Text style={styles.monTexte}>{itemData.item.text}</Text>
                    </View>
                )
            }} keyExtractor={(item,index) => {
                return index
            }} 
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "orange",
        flex :1,
        padding :20,
    },
    monTexte: {
        margin : 8,
        color : "white",
    },
    tailleTexte: {
        fontSize:32,
    }
})