import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container } from '../shared'

const Other = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) =>
      setHasPermission(status === 'granted')
    )
  }, [])

  const handleBarCodeScanned = ({ data: id }) =>
    navigation.navigate('Household', { id })

  if (hasPermission === null)
    return (
      <Container>
        <Text>Requested camera permission</Text>
      </Container>
    )
  if (hasPermission === false)
    return (
      <Container>
        <Text>No access to camera</Text>
      </Container>
    )

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      />
    </Container>
  )
}

export default Other
