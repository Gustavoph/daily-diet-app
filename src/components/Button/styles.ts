import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

interface ButtonContainerProps {
  variant?: 'outlined' | 'filled'
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'filled'
      ? theme.COLORS.GRAY_2
      : theme.COLORS.WHITE};
    border-color: ${theme.COLORS.GRAY_2};
  `};

  gap: 12px;
  border-radius: 6px;
`
