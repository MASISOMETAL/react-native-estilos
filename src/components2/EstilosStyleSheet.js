import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EstilosStyleSheet = () => {
  return (
    <View style={styles.container}>
      <Text>EstilosStyleSheet</Text>
    </View>
  )
}

export default EstilosStyleSheet

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    width: "80%",
    alignItems: 'center',
    padding: 5,
    marginVertical: 5
  }
})