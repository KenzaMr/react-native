//Exercice:
//Créer un composant PassWord INput il va recevoir 3 props
//Place holder, action et error
//A l'intérieur du composant je vais ajouter un bouton avec un oeil 
//Ajouter une variable d'état qui est un true au début 
//Quand l'utilisateur va appuyer sur le bouton la variable d'état change et devient false et inversement
// Dans le text input il y a un attribut qu s'appelle secureTextEntrer, cette attribut si je le donne false il cache les attributs et si je le lui donne true il affiche les attributs 
import { useState } from "react"
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';

const PassWordInput=({placeholder, action, error}) =>{
    const[boutonPassWord,setBoutonPassWord]=useState(true)
    function showPassWord(){
        setBoutonPassWord(!boutonPassWord)
    }
return(
    <View>
        <View style={inputStyle.input}>
        <TextInput
        placeholder={placeholder}
        onChangeText={action}
        secureTextEntry={boutonPassWord}
        />
        <TouchableOpacity onPress={showPassWord}>
        <Feather name={!boutonPassWord ? "eye-off" :"eye"} size={24} 
        color={boutonPassWord ? "black":"green" } />
        </TouchableOpacity>
        <Text>{error}</Text>
        </View>
    </View>
)
}
const inputStyle = StyleSheet.create({
    input: {
      backgroundColor: "gray",
      color: "white",
      padding: 10,
      margin: 5,
      justifyContent:"space-between",
      display:"flex",
      flexDirection:"row"
    },
  });
  export default PassWordInput