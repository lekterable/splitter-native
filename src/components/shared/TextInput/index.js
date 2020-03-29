import React from 'react'
import * as Styled from './styled'

const TextInput = ({ value, placeholder, onChange, onBlur, ...props }) => (
  <Styled.TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={onChange}
    onBlur={onBlur}
    autoCapitalize="none"
    autoComplete="off"
    {...props}
  />
)

export default TextInput
