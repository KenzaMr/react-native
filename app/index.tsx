import { View, Text, Image} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Image style={{
        width:"100%",
        height:500,
      }}
      source={{
        uri:"https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/j2gawyfdwsdxjmxjy0fy"
      }}/>
<Link href={"/contact"}>Contactez-moi</Link>
    </View>
  );
}

// Soit l'image est une URL:
// source:{{
// uri:"URL/de/l'image"
// }}

// Soit l'image est dans le dossier :
// source:{require('./chemin/relatif/vers/l'image')}

// Il n'y a plus de HTML, on utilise des balises importés de react-native
// https://reactnative.dev/docs/components-and-apis

// Il n'y a plus de CSS, il faut utiliser la methode create() de StyleSheet
// const style = StyleSheet.create({
//   container:{
//     backgroundColor : 'blue'
//   },
//   titre:{
//     color:'white',
//     margin:'auto',
//     padding:10
//   }
// })