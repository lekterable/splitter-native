import React from 'react'
import { Button, Text, View } from 'react-native'
import auth from '../../utils/auth'

export default ({ navigation }) => {
  const onSignUp = async () => {
    await auth.authenticate('token')
    navigation.navigate('InitScreen')
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Sign Up</Text>
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  )
}
