import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Other = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [code, setCode] = useState('')

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) =>
      setHasPermission(status === 'granted')
    )
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    setCode(data)
  }

  if (hasPermission === null)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Requested camera permission</Text>
      </View>
    )
  if (hasPermission === false)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>No access to camera</Text>
      </View>
    )

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {code ? (
        <Text>{code}</Text>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />
      )}
      <Button title="witam" onPress={() => setCode('')} />
    </View>
  )
}

export default Other
