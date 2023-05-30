import { Heading } from '@components/Heading'
import * as S from './styles'
import { TouchableOpacityProps } from 'react-native/types'

interface SelectProps extends TouchableOpacityProps {
  label: string
  activeColor: 'red' | 'green'
  isActive: boolean
}

export function Select({ label, activeColor, isActive, ...rest }: SelectProps) {
  return (
    <S.SelectContainer activeColor={activeColor} isActive={isActive} {...rest}>
      <S.SelectIndicator activeColor={activeColor} />

      <Heading>{label}</Heading>
    </S.SelectContainer>
  )
}
