import React from 'react'
import { Button, View } from 'react-native'
import { handleSignOut } from '../../utils/auth'

export default ({ navigation }) => {
  const onSignOut = () =>
    handleSignOut().then(() => navigation.navigate('InitScreen'))

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Button title="Sign Out" onPress={onSignOut} />
    </View>
  )
}
