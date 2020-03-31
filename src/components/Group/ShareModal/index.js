import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { Modal } from '../../shared'

const ExpenseModal = ({ isSharing, onClose, code, ...props }) => (
  <Modal visible={isSharing} onClose={onClose} {...props}>
    <QRCode value={code} />
  </Modal>
)

export default ExpenseModal
