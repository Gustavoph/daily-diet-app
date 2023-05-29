import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const PercentCard = styled(TouchableOpacity)`
  position: relative;

  width: 100%;
  height: 102px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['2XL']}px;
  `};
`

export const PercentSubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`

export const PercentIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;

  top: 5px;
  right: 5px;
`
