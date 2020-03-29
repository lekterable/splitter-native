import { TextInput as TextInputComponent } from 'react-native'
import styled, { css } from 'styled-components/native'

export const TextInput = styled(TextInputComponent)`
  border-color: gray;
  width: 150px;
  height: ${({ multiline }) => (multiline ? 'auto' : '30px')};
  border-width: 1px;
  text-align: center;
  border-radius: 10px;
  padding: 0 10px 0;

  ${({ multiline }) =>
    multiline &&
    css`
      max-height: 60px;
    `}
`
