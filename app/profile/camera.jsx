import { View, Text, Button, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions} from 'expo-camera'
import { CameraType, FlashMode } from 'expo-camera/build/legacy/Camera.types';
import { useState } from 'react';

export default function camera(params) {
    const [permission, requestPermission] = useCameraPermissions();
    const[type,setType]=useState(CameraType.back)
    const[flash,setFlash]=useState(FlashMode.on)
    const[zoomm,setZoomm]=useState(0)


    if (!permission) {
        return <Text>Chargement...</Text>
    }

    if (!permission.granted) {
        <View>
            <Text>Permissions non acceptés</Text>
            <Button onPress={requestPermission} title='Accepter la permission'>
            </Button>
        </View>
    }
    function toggleCameraType(){
        setType(current => (current ===CameraType.back ? CameraType.front :CameraType.back))
    }
    function flashCameraType(){
        setFlash(current =>(current === FlashMode.on ? FlashMode.off :FlashMode.on))
    }
    function zoomCameraType(){
        setZoomm(current =>(current === 0? 1 : 0))
    }
    return(
        <View>
            <CameraView style={style.camera} type={type} flash={flash}></CameraView>
            <Button onPress={toggleCameraType} title='Caméra'></Button>
            <Button onPress={flashCameraType} title='Flash'></Button>
            <Button onPress={zoomCameraType} title='Zoom'></Button>
        </View>
    )
}

const style=StyleSheet.create({
    camera:{
        height:500,
        width:'100%'
    }
})
// Exercice:
// Ajouter des boton a la camera pour:
// 1. Changer la camera (avant arriere)
// 2. Activer le flash
// 3. Zoommer