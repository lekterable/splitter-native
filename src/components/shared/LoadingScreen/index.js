import React from 'react'
import { ActivityIndicator } from 'react-native'
import Container from '../Container'

const LoadingScreen = ({ size = 'large' }) => (
  <Container>
    <ActivityIndicator size={size} />
  </Container>
)

export default LoadingScreen
