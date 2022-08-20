import { StyleSheet, Text, View} from 'react-native'
import React from 'react'


export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>RELATÓRIO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%"

  }




});
