import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const index = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>index</Text>
      <Button onPress={() => Auth.signOut()} title="SignOut" />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})