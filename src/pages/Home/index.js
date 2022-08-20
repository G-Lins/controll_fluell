import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Dados do Banco de cadastro</Text>
        </View>

        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>

        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>

        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>

        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>
        
        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>

        <View style={styles.content}>
        <Text>Dados do Banco de cadastro</Text>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
    
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '98%',
    height: 120,
    marginBottom: 40,
    backgroundColor: '#8894A2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    fontSize:45
  }
});
