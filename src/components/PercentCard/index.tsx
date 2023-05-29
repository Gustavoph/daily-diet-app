import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface PercentCardProps extends TouchableOpacityProps {
  percentage: number
}

export function PercentCard({ percentage, ...rest }: PercentCardProps) {
  return (
    <S.PercentCard {...rest}>
      <S.PercentIcon />
      <S.PercentTitle>{percentage}%</S.PercentTitle>
      <S.PercentSubTitle>das refeições dentro da dieta</S.PercentSubTitle>
    </S.PercentCard>
  )
}
