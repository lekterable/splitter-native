import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import auth from '../utils/auth'

export default ({ navigation }) => {
  auth
    .isAuthenticated()
    .then(isAuthenticated =>
      isAuthenticated ? navigation.navigate('App') : navigation.navigate('Auth')
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
