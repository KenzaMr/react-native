import {Drawer} from "expo-router/drawer"
import{GestureHandlerRootView} from "react-native-gesture-handler"

export default function RootLayout(){
  return (
    <GestureHandlerRootView>
    <Drawer
    screenOptions={{
      headerStyle:{
        backgroundColor:"royalblue"
      },
      headerTitleStyle:{
        color:"whitesmoke"
      },
      headerTintColor:"whitesmoke"
    }}
    >
      <Drawer.Screen 
      name="index"
      options={{
        drawerLabel:"Accueil",
        title:"Page d'accueil",
        headerStyle:{
          backgroundColor:"green"
        }
      }}
      />
    </Drawer>
  </GestureHandlerRootView>
    // <Stack>
    //   <Stack.Screen name='index' />
    //   <Stack.Screen name='contact' />
    // </Stack>
  )
}

// Expo utilise la navigation par structure de dossier
//Expo nous offre plusieurs sorte de navigation:
//Navigation en Stack (Pile)
//Navigation en Drawer (Tirroire, menu qui sort de la droite)
//Navigation en Tab (Onglets)