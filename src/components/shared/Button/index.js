import React from 'react'
import * as Styled from './styled'

const Button = ({ color = '#4CB944', title, onClick, ...props }) => (
  <Styled.Button color={color} title={title} onClick={onClick} {...props} />
)

export default Button
