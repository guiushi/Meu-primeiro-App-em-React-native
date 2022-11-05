import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragrafo}>
        Deixo com você essa bela imagem de bom dia e um sincero pedido de desculpas por faltar nas 2 primeiras aulas sua, a partir da próxima estarei presente. Tamo junto professor.
      </Text>
      <Image style={styles.imagem}
        source={require('./assets/imagens-de-bom-dia.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragrafo: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
    marginLeft: 40,
  }
});
