import { TextProps as NTextProp } from 'react-native'

import * as S from './styles'
import { PropsWithChildren } from 'react'
import { COLORS_TYPE, SIZE_TYPE } from '@themes/index'

interface HeadingProps extends NTextProp, PropsWithChildren {
  color?: COLORS_TYPE
  variant?: 'text' | 'heading'
  size?: SIZE_TYPE
}

export function Heading({
  size = 'SM',
  color = 'GRAY_1',
  children,
  ...rest
}: HeadingProps) {
  return (
    <S.Heading size={size} color={color} {...rest}>
      {children}
    </S.Heading>
  )
}
