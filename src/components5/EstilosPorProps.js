import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EstilosPorProps = ({customStyle}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Text>EstilosPorProps</Text>
    </View>
  )
}

export default EstilosPorProps

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: 'center',
    padding: 5,
    marginVertical: 5
  }
})