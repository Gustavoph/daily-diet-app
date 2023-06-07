import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

interface PercentCardProps {
  color: 'red' | 'green'
}

export const PercentCard = styled(TouchableOpacity)<PercentCardProps>`
  position: relative;

  width: 100%;
  height: 102px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${({ theme, color }) =>
    color === 'green' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const PercentIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;

  top: 5px;
  right: 5px;
`
