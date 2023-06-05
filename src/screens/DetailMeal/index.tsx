import { Button } from '@components/Button'
import * as S from './styles'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { DeleteMeal } from '@components/DeleteMeal'

export function DetailMeal() {
  const [isDeleteMealOpen, setIsDeleteMealOpen] = useState(false)

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleGoEditMeal() {
    navigation.navigate('edit')
  }

  return (
    <S.DetailsMealContainer>
      <S.DetailsMealHeader>
        <S.GoBackButton onPress={handleGoBack}>
          <S.DetailsMealIcon />
        </S.GoBackButton>
        <Heading size="LG">Refeição</Heading>
      </S.DetailsMealHeader>

      <S.DetailsMealWrapper>
        <S.FormGroup>
          <Heading size="LG">Sanduíche</Heading>
          <Text size="MD">
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </S.FormGroup>

        <S.FormGroup>
          <Heading size="SM">Data e Hora</Heading>
          <Text size="MD">12/08/2022 às 16:00</Text>
        </S.FormGroup>

        <S.FormGroup>
          <S.StatusMealWrapper>
            <S.StatusMealIndicator />
            <Text>dentro da dieta</Text>
          </S.StatusMealWrapper>
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
      />
    </S.DetailsMealContainer>
  )
}
