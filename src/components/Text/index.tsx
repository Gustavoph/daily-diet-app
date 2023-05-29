import { TextProps as NTextProp } from 'react-native'

import * as S from './styles'
import { PropsWithChildren } from 'react'
import { COLORS_TYPE, SIZE_TYPE } from '@themes/index'

interface TextProps extends NTextProp, PropsWithChildren {
  color?: COLORS_TYPE
  variant?: 'text' | 'heading'
  size?: SIZE_TYPE
}

export function Text({
  size = 'SM',
  color = 'GRAY_2',
  children,
  ...rest
}: TextProps) {
  return (
    <S.Text size={size} color={color} {...rest}>
      {children}
    </S.Text>
  )
}
