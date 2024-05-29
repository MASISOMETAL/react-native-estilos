import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EstilosEnLinea from './src/components/EstilosEnLinea'
import EstilosStyleSheet from './src/components2/EstilosStyleSheet'
import EstilosArchivoSeparado from './src/components3/EstilosArchivoSeparado/EstilosArchivoSeparado'
import EstilosCombinados from './src/componente4/EstilosCombinados'
import EstilosPorProps from './src/components5/EstilosPorProps'

const App = () => {
  return (
    <View style={styles.container}>
      <EstilosEnLinea />
      <EstilosStyleSheet />
      <EstilosArchivoSeparado />
      <EstilosCombinados />
      <EstilosPorProps customStyle={styles.miStyle} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
  miStyle: {
    backgroundColor: "#55ff55"
  }
})