import { Ionicons } from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Container, ErrorScreen } from '../shared'
import QRScanner from './QRScanner'
import * as Styled from './styled'

const Other = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [code, setCode] = useState('')

  useEffect(() => {
    if (!isScanning) return

    BarCodeScanner.requestPermissionsAsync().then(({ status }) =>
      setHasPermission(status === 'granted')
    )
  }, [isScanning])

  const handleBarCodeScanned = ({ data: id }) =>
    navigation.navigate('Group', { id })
  const handleCodeChange = code => setCode(code && code.toUpperCase())
  const handleScannerOpen = () => setIsScanning(true)
  const handleScannerClose = () => setIsScanning(false)

  if (isScanning && hasPermission === null)
    return (
      <Container>
        <Text>Requested camera permission</Text>
      </Container>
    )
  if (isScanning && hasPermission === false)
    return (
      <Container>
        <ErrorScreen error="Access to camera denied" />
      </Container>
    )

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.CodeInput
          value={code}
          onChangeText={handleCodeChange}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          maxLength={6}
        />
        <Text>OR</Text>
        <TouchableOpacity onPress={handleScannerOpen}>
          <Ionicons name="ios-qr-scanner" size={40} />
        </TouchableOpacity>
      </Styled.Wrapper>
      {isScanning && (
        <QRScanner onScan={handleBarCodeScanned} onClose={handleScannerClose} />
      )}
    </Container>
  )
}

export default Other
