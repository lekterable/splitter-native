import React from 'react'
import { Modal, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { Button } from '../../shared'

const ExpenseModal = ({ isSharing, onClose, code }) => {
  if (!isSharing) return null

  return (
    <Modal animationType="slide" visible={isSharing} onRequestClose={onClose}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1
        }}
      >
        <QRCode value={code} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  )
}

export default ExpenseModal
