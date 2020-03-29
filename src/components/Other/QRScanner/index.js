import { Ionicons } from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as Styled from './styled'

const QRScanner = ({ onScan, onClose }) => (
  <>
    <BarCodeScanner
      onBarCodeScanned={onScan}
      style={StyleSheet.absoluteFillObject}
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
    />
    <Styled.CloseButton>
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="md-close" size={40} color="white" />
      </TouchableOpacity>
    </Styled.CloseButton>
  </>
)

export default QRScanner
