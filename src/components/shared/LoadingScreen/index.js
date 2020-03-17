import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoadingScreen = ({ size = 'large' }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}
  >
    <ActivityIndicator size={size} />
  </View>
)

export default LoadingScreen
