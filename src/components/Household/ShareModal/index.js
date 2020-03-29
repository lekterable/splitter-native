import React from 'react'
import { Button, Modal, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

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
        <Button title="Close" color="#4CB944" onPress={onClose} />
      </View>
    </Modal>
  )
}

export default ExpenseModal
