import styled from 'styled-components/native'

interface InputProps {
  isFocus: boolean
}

export const Input = styled.TextInput<InputProps>`
  height: 48px;

  border-width: 1px;
  border-color: ${({ theme, isFocus }) =>
    isFocus ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
