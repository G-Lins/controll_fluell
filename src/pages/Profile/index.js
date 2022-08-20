import { StyleSheet, Text, View } from 'react-native';


export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Gráficos</Text>
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
});
