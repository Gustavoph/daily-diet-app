import { Heading } from '@components/Heading'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'
import { Text } from '@components/Text'
import { Paper } from '@components/Paper'

export function Details() {
  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <S.DetailsContainer>
      <S.DetailsHeader>
        <S.DetailsButton onPress={handleGoToHome}>
          <S.DetailsIcon />
        </S.DetailsButton>
        <Heading size="2XL">98.90%</Heading>
        <Text size="SM">das refeições dentro da dieta</Text>
      </S.DetailsHeader>

      <S.DetailsWrapper>
        <Heading size="SM">Estatísticas gerais</Heading>

        <Paper style={{ width: '100%', marginTop: 10 }}>
          <Heading size="2XL">22</Heading>
          <Text size="SM">melhor sequência de pratos dentro da dieta</Text>
        </Paper>

        <Paper style={{ width: '100%' }}>
          <Heading size="2XL">22</Heading>
          <Text size="SM">refeições registradas</Text>
        </Paper>

        <S.InfoWrapper>
          <Paper color="GREEN_LIGHT">
            <Heading size="2XL">22</Heading>
            <Text size="SM">refeições registradas</Text>
          </Paper>

          <Paper color="RED_LIGHT">
            <Heading size="2XL">22</Heading>
            <Text size="SM">refeições registradas</Text>
          </Paper>
        </S.InfoWrapper>
      </S.DetailsWrapper>
    </S.DetailsContainer>
  )
}
