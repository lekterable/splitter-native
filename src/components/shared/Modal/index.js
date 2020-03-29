import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../Container'
import * as Styled from './styled'

const Modal = ({ onClose, children, closeButton = true, ...props }) => (
  <Styled.Modal animationType="slide" onRequestClose={onClose} {...props}>
    <Container>
      {closeButton && (
        <Styled.CloseButton>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="md-close" size={40} />
          </TouchableOpacity>
        </Styled.CloseButton>
      )}
      {children}
    </Container>
  </Styled.Modal>
)

export default Modal
