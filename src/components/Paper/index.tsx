import { PropsWithChildren } from 'react'
import { ViewProps } from 'react-native'
import * as S from './styles'
import { COLORS_TYPE } from '@themes/index'

interface PaperProps extends PropsWithChildren, ViewProps {
  color?: COLORS_TYPE
}

export function Paper({ children, ...rest }: PaperProps) {
  return <S.PaperContainer {...rest}>{children}</S.PaperContainer>
}
