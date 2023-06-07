import { COLORS_TYPE } from '@themes/index'
import styled from 'styled-components/native'

interface PaperContainerProps {
  color?: COLORS_TYPE
  w?: string
}

export const PaperContainer = styled.View<PaperContainerProps>`
  border-radius: 8px;

  padding: 16px;
  gap: 8px;

  align-items: center;
  width: ${({ w }) => w};
  background-color: ${({ theme, color = 'GRAY_6' }) => theme.COLORS[color]};
`
