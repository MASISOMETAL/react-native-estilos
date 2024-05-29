import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EstilosCombinados = () => {
  return (
    <View style={{...styles.container, ...styles.colorBG}}>
      <Text style={[styles.textColor, {fontWeight: "bold"}]}>EstilosCombinados</Text>
    </View>
  )
}

export default EstilosCombinados

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: 'center',
    padding: 5,
    marginVertical: 5
  },
  colorBG: {
    backgroundColor: "blue",
  },
  textColor: {
    color: "white"
  }
})