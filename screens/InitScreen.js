import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { isSignedIn } from '../utils/auth'

export default ({ navigation }) => {
  isSignedIn().then(signedIn =>
    signedIn ? navigation.navigate('App') : navigation.navigate('Auth')
  )

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}
