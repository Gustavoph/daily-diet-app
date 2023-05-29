import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'

interface TextAreaProps extends TextInputProps {}

export function TextArea({ ...rest }: TextAreaProps) {
  const [isFocus, setIsFocus] = useState(false)
  const { COLORS } = useTheme()

  return (
    <S.TextArea
      isFocus={isFocus}
      onBlur={() => setIsFocus(false)}
      onFocus={() => setIsFocus(true)}
      selectionColor={COLORS.GRAY_5}
      {...rest}
    />
  )
}
