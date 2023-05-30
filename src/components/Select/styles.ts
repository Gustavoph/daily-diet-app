import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ColorSchema = 'red' | 'green'

interface SelectContainerProps {
  isActive: boolean
  activeColor: ColorSchema
}

interface SelectIndicatorProps {
  activeColor: ColorSchema
}

export const SelectContainer = styled(TouchableOpacity)<SelectContainerProps>`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-direction: row;

  ${({ theme, activeColor, isActive }) => css`
    border-color: ${isActive
      ? activeColor === 'green'
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_6};
    background-color: ${isActive
      ? activeColor === 'green'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border-width: ${isActive ? '1px' : '0px'};
  `};

  border-radius: 6px;
`

export const SelectIndicator = styled.View<SelectIndicatorProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  background-color: ${({ theme, activeColor }) =>
    activeColor === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
