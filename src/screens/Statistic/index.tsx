import { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Heading } from '@components/Heading'
import * as S from './styles'
import { Text } from '@components/Text'
import { Paper } from '@components/Paper'
import { fetchMealsStorage } from '@storage/meal.storage'
import { mealsReducer } from '@utils/mealsReducer'
import { MealDTO } from '@dtos/meal'

export function Statistics() {
  const [meals, setMeals] = useState<MealDTO[]>([])

  const { correctMeals, wrongMeals, streak, percentage, totalMeals } =
    mealsReducer(meals)

  const navigation = useNavigation()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  useLayoutEffect(() => {
    fetchMealsStorage().then((meals: MealDTO[]) => setMeals(meals))
  }, [])

  const color = percentage >= 50 ? 'green' : 'red'

  return (
    <S.StatisticsContainer color={color}>
      <S.StatisticsHeader>
        <S.StatisticsButton onPress={handleGoToHome}>
          <S.StatisticsIcon />
        </S.StatisticsButton>
        <Heading size="2XL">{percentage}%</Heading>
        <Text size="SM">das refeições dentro da dieta</Text>
      </S.StatisticsHeader>

      <S.StatisticsWrapper>
        <Heading size="SM">Estatísticas gerais</Heading>

        <Paper style={{ width: '100%', marginTop: 10 }}>
          <Heading size="2XL">{streak}</Heading>
          <Text size="SM">melhor sequência de pratos dentro da dieta</Text>
        </Paper>

        <Paper style={{ width: '100%' }}>
          <Heading size="2XL">{totalMeals}</Heading>
          <Text size="SM">refeições registradas</Text>
        </Paper>

        <S.InfoWrapper>
          <Paper color="GREEN_LIGHT" w="48%">
            <Heading size="2XL">{correctMeals}</Heading>
            <Text size="SM">refeições dentro da</Text>
            <Text size="SM">Dieta</Text>
          </Paper>

          <Paper color="RED_LIGHT" w="48%">
            <Heading size="2XL">{wrongMeals}</Heading>
            <Text size="SM">refeições fora da</Text>
            <Text size="SM">Dieta</Text>
          </Paper>
        </S.InfoWrapper>
      </S.StatisticsWrapper>
    </S.StatisticsContainer>
  )
}
