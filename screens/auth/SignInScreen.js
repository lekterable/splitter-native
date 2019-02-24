import React from 'react'
import { Button, Text, View } from 'react-native'
import { handleSignIn } from '../../utils/auth'

export default ({ navigation }) => {
  const onSignIn = () =>
    handleSignIn().then(() => navigation.navigate('InitScreen'))

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Sign In</Text>
      <Button title="Sign In" onPress={onSignIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  )
}
