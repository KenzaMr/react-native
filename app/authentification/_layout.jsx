import React from 'react'
import { Tabs} from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo'
import { Feather } from '@expo/vector-icons';
export default function _llayout() {
  return (
    <Tabs>
        <Tabs.Screen 
        name="index" 
        options={{
            title:"Connexion",
        tabBarIcon:({color})=> <Feather name="user" size={24} color="black"/> 
    }} />
    <Tabs.Screen 
        name="register" 
        options={{
            title:"Inscription",
        tabBarIcon:({color})=> <AntDesign name="profile" size={24} color="black" />
    }} />
    </Tabs>
  );
}
