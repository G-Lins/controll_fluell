import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet,ImageBackground } from 'react-native';


const imgbr1 = './assets/imagens/abt.jpg'


export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground
      source={require(imgbr1)}
      style={estilo.imagemFundo}
      >  
      </ImageBackground>
      <Routes />
    </NavigationContainer>

  );
};

const estilo = StyleSheet.create({
  imagemFundo: {
    flex: 0.3,
    resizeMode: "cover",
    width:"100%",
    resizeMode:'contain'
    
}
})





