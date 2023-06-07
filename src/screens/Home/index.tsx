import dayjs from 'dayjs'
import { SectionList } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import logo from '@assets/logo.png'
import * as S from './styles'
import { PercentCard } from '@components/PercentCard'
import { Text } from '@components/Text'
import { Heading } from '@components/Heading'
import { fetchMealsStorage } from '@storage/meal.storage'
import {
  SectionMeal,
  mapMealsToSectionList,
} from '@utils/map-meals-to-section-list'
import { mealsReducer } from '@utils/mealsReducer'
import { MealDTO } from '@dtos/meal'

export function Home() {
  const [meals, setMeals] = useState<MealDTO[]>([])
  const [sectionMeals, setSectionMeals] = useState<SectionMeal[]>([])

  const navigation = useNavigation()
  const { percentage } = mealsReducer(meals)

  function handleGoStatistic() {
    navigation.navigate('statistics')
  }

  function handleGoMealDetails(id: string) {
    navigation.navigate('details', { id })
  }

  function handleAddNewMeal() {
    navigation.navigate('new')
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsStorage().then((meals) => {
        setMeals(meals)
        setSectionMeals(mapMealsToSectionList(meals))
      })
    }, []),
  )

  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Logo source={logo} alt="Logo Daily Diet" />
        <S.Avatar source={{ uri: 'https://github.com/gustavoph.png' }} />
      </S.HomeHeader>

      <S.HomeWrapper>
        <PercentCard percentage={percentage} onPress={handleGoStatistic} />

        <S.MealsContainer>
          <Text size="MD">Refeições</Text>

          <S.AddMealButton onPress={handleAddNewMeal}>
            <S.AddMealButtonIcon />
            <Heading size="SM" color="WHITE">
              Nova refeição
            </Heading>
          </S.AddMealButton>
          <S.DailyMealsWrapper>
            <SectionList
              sections={sectionMeals}
              scrollEnabled
              keyExtractor={({ id }) => id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <S.MealCard
                  onPress={() => handleGoMealDetails(item.id)}
                  style={{ marginBottom: 8 }}
                >
                  <Heading size="XS">
                    {dayjs(item.createdAt).format('hh:mm')}
                  </Heading>
                  <S.MealSeparator />
                  <Text size="SM">{item.name}</Text>
                  <S.MealStatus color={item.isOnTheDiet ? 'green' : 'red'} />
                </S.MealCard>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Heading size="LG" style={{ marginBottom: 8 }}>
                  {dayjs(title).format('DD.MM.YYYY')}
                </Heading>
              )}
            />
          </S.DailyMealsWrapper>
        </S.MealsContainer>
      </S.HomeWrapper>
    </S.HomeContainer>
  )
}
