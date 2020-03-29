import React from 'react'
import { Text } from 'react-native'
import Container from '../Container'

const ErrorScreen = ({ error = '' }) => (
  <Container>
    <Text style={{ color: 'red' }}>{`ERROR: ${error}`}</Text>
  </Container>
)

export default ErrorScreen
