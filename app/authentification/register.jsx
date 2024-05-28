import React, { useState } from "react"
import {View , Text} from "react-native"
import InputAvecError from "../../components/inputAvecError";
import Bouton from "../../components/Bouton.jsx";
import { Link } from "expo-router";

export default function Inscription(){
const[Email,setEmail]=useState("")
const[EmailErr,setEmailErr]=useState("")

const[Mdp,setMdp]=useState("")
const[MdpErr,setMdpErr]=useState("")

const [confirm,setConfirm]=useState('')
const [confirmErr, setConfirmErr]=useState('')

function creationEmail(text){
    setEmailErr('')
    setEmail(text)
    if(Email == ""){
        return setEmailErr("Format invalide")
    }if(!Email.includes('@')){
        return setEmailErr("Email nécessitant le @")
    }
}
function creaMdp(text){
    setMdpErr('')
    setMdp(text)
    if(Mdp == ""){
        return setMdpErr("Mot de passe invalide")
    }
}
function Correction(text){
    setConfirmErr('')
    setConfirm(text)
    if(text !=Mdp){
        return setConfirmErr("Les deux mots de passe ne sont pas corrects")
    }
}
function submitFormulaire(){
    if(Email == ""){
        return setEmailErr("Format invalide")
    }if(!Email.includes('@')){
        return setEmailErr("Email nécessitant le @")
    }if(Mdp == ""){
        return setMdpErr("Mot de passe invalide")
    }if(text !=Mdp){
        return setConfirmErr("Les deux mots de passe ne sont pas corrects")
    }else{
        alert("Bienvenue")
    }
}

return (
    <View>
        <InputAvecError placeholder={"Email"} action={creationEmail} type="email-adress" error={EmailErr}></InputAvecError>
        <InputAvecError placeholder={"Mot de passe"} action={creaMdp} type="password" error={MdpErr}></InputAvecError>
        <InputAvecError placeholder={"Confirmez le mot de passe"} action={Correction} type="password" error={confirmErr}></InputAvecError>
        <Bouton label={"Envoyer inscripton"} action={submitFormulaire}></Bouton>
    </View>
)
}