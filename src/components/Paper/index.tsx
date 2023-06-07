import { PropsWithChildren } from 'react'
import { ViewProps } from 'react-native'
import * as S from './styles'
import { COLORS_TYPE } from '@themes/index'

interface PaperProps extends PropsWithChildren, ViewProps {
  color?: COLORS_TYPE
  w?: string
}

export function Paper({ children, w = '100%', ...rest }: PaperProps) {
  return (
    <S.PaperContainer w={w} {...rest}>
      {children}
    </S.PaperContainer>
  )
}
