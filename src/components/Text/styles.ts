import { css } from 'styled-components'
import styled from 'styled-components/native'
import { COLORS_TYPE, SIZE_TYPE } from '@themes/index'

interface TextProps {
  color: COLORS_TYPE
  size: SIZE_TYPE
}

export const Text = styled.Text<TextProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.COLORS[color]};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE[size]}px;
  `};
`
