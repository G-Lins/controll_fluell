import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { webview } from 'react-native-webview'


export default function Search() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);

  if (go == false) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          onChangeText={text => setUrl(text)}
          value={url}/>
        <View style={{ margin: 0.1 }}>
          <Button
            onPress={() => setGo(true)}
            title="GO"
          />
        </View>
      </View>
    );
  } else {
    return (
      <webview
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  }

}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  text:{
    borderWidth:1,
    margin: 3,
  },
});