import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'

interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false)
  const { COLORS } = useTheme()

  return (
    <S.Input
      isFocus={isFocus}
      onBlur={() => setIsFocus(false)}
      onFocus={() => setIsFocus(true)}
      selectionColor={COLORS.GRAY_5}
      {...rest}
    />
  )
}
