import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'
import { PropsWithChildren } from 'react'

interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {
  variant?: 'outlined' | 'filled'
}

export function Button({ variant = 'filled', children, ...rest }: ButtonProps) {
  return (
    <S.ButtonContainer variant={variant} {...rest}>
      {children}
    </S.ButtonContainer>
  )
}
