import { css } from 'styled-components'
import styled from 'styled-components/native'
import { COLORS_TYPE, SIZE_TYPE } from '@themes/index'

interface HeadingProps {
  color: COLORS_TYPE
  size: SIZE_TYPE
}

export const Heading = styled.Text<HeadingProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.COLORS[color]};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE[size]}px;
  `};
`
