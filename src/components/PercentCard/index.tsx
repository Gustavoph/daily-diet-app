import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'

interface PercentCardProps extends TouchableOpacityProps {
  percentage: number
}

export function PercentCard({ percentage, ...rest }: PercentCardProps) {
  const color = percentage >= 50 ? 'green' : 'red'

  return (
    <S.PercentCard color={color} {...rest}>
      <S.PercentIcon />
      <Heading size="2XL">{percentage}%</Heading>
      <Text size="SM">das refeições dentro da dieta</Text>
    </S.PercentCard>
  )
}
