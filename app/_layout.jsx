import {Drawer} from "expo-router/drawer"
import{GestureHandlerRootView} from "react-native-gesture-handler"
import{createContext, useState} from "react"

export const EmailContext=createContext()
export default function RootLayout(){
  const[user,setUser]=useState(null)
  return (
    <EmailContext.Provider value={{user,setUser}}>
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
    </EmailContext.Provider>
   
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

// layout principale:
// Créer un context
// Ajouter une variable d'atat user et setUser
// Ajouter le Provider avec les valeur user et setUser