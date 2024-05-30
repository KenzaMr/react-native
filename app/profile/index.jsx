import{View, Text} from "react-native"
import React,{useContext} from "react"
import { EmailContext } from "../_layout"
import { Link } from "expo-router"
export default function index(){
    return(
        <View>
            <Link href={"/profile/camera"}>Camera</Link>
        </View>
    )
}