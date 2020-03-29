import React from 'react'
import * as Styled from './styled'

const TextInput = ({
  value,
  name,
  placeholder,
  onChange,
  onBlur,
  ...props
}) => (
  <Styled.TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={onChange(name)}
    onBlur={onBlur(name)}
    autoCapitalize="none"
    autoComplete="off"
    {...props}
  />
)

export default TextInput
