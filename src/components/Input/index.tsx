import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { forwardRef, useState } from 'react'

interface InputProps extends TextInputProps {}

export function InputComponent({ ...rest }: InputProps, ref: any) {
  const [isFocus, setIsFocus] = useState(false)
  const { COLORS } = useTheme()

  return (
    <S.Input
      ref={ref}
      isFocus={isFocus}
      onBlur={() => setIsFocus(false)}
      onFocus={() => setIsFocus(true)}
      selectionColor={COLORS.GRAY_5}
      {...rest}
    />
  )
}

export const Input = forwardRef(InputComponent)
