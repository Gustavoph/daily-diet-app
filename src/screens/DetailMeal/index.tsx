import dayjs from 'dayjs'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useCallback, useState } from 'react'

import { Button } from '@components/Button'
import * as S from './styles'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { DeleteMeal } from '@components/DeleteMeal'
import { getMealsStorage, removeMealStorage } from '@storage/meal.storage'
import { MealDTO } from '@dtos/meal'

export function DetailMeal() {
  const [meal, setMeal] = useState({} as MealDTO)
  const [isDeleteMealOpen, setIsDeleteMealOpen] = useState(false)

  const { params } = useRoute()
  const { id } = params as { id: string }

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleGoEditMeal() {
    navigation.navigate('edit', { meal })
  }

  async function handleDeleteMeal() {
    await removeMealStorage(meal)
    handleGoBack()
  }

  useFocusEffect(
    useCallback(() => {
      getMealsStorage(id).then((meal) => {
        if (meal) setMeal(meal)
      })
    }, [id]),
  )

  return (
    <S.DetailsMealContainer color={meal.isOnTheDiet ? 'green' : 'red'}>
      <S.DetailsMealHeader>
        <S.GoBackButton onPress={handleGoBack}>
          <S.DetailsMealIcon />
        </S.GoBackButton>
        <Heading size="LG">Refeição</Heading>
      </S.DetailsMealHeader>

      <S.DetailsMealWrapper>
        <S.FormGroup>
          <Heading size="LG">{meal.name}</Heading>
          <Text size="MD">{meal.description}</Text>
        </S.FormGroup>

        <S.FormGroup>
          <Heading size="SM">Data e Hora</Heading>
          <Text size="MD">
            {dayjs(meal.createdAt).format('DD/MM/YYYY [às] hh:mm')}
          </Text>
        </S.FormGroup>

        <S.FormGroup>
          {meal.isOnTheDiet ? (
            <S.StatusMealWrapper>
              <S.StatusMealIndicator color="green" />
              <Text>dentro da dieta</Text>
            </S.StatusMealWrapper>
          ) : (
            <S.StatusMealWrapper>
              <S.StatusMealIndicator color="red" />
              <Text>fora da dieta</Text>
            </S.StatusMealWrapper>
          )}
        </S.FormGroup>

        <S.FormWrapper>
          <Button onPress={handleGoEditMeal}>
            <S.EditMealIcon />
            <Heading color="WHITE">Editar refeição</Heading>
          </Button>
          <Button variant="outlined" onPress={() => setIsDeleteMealOpen(true)}>
            <S.DeleteMealIcon />
            <Heading color="GRAY_1">Excluir refeição</Heading>
          </Button>
        </S.FormWrapper>
      </S.DetailsMealWrapper>

      <DeleteMeal
        isOpen={isDeleteMealOpen}
        onClose={() => setIsDeleteMealOpen(false)}
        onConfirm={() => handleDeleteMeal()}
      />
    </S.DetailsMealContainer>
  )
}
