import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'
import { PropsWithChildren } from 'react'

interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {}

export function Button({ children, ...rest }: ButtonProps) {
  return <S.ButtonContainer {...rest}>{children}</S.ButtonContainer>
}
