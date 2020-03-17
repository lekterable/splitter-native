import React from 'react'
import { Text, View } from 'react-native'

const ErrorScreen = ({ error }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}
  >
    <Text style={{ color: 'red' }}>{`ERROR: ${error}`}</Text>
  </View>
)

export default ErrorScreen
