import logo from '@assets/logo.png'
import * as S from './styles'
import { PercentCard } from '@components/PercentCard'
import { useNavigation } from '@react-navigation/native'
import { Text } from '@components/Text'
import { Heading } from '@components/Heading'

export function Home() {
  const navigation = useNavigation()

  function handleGoStatistic() {
    navigation.navigate('statistic')
  }

  function handleGoMealDetails() {
    navigation.navigate('details')
  }

  function handleAddNewMeal() {
    navigation.navigate('new')
  }

  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Logo source={logo} alt="Logo Daily Diet" />
        <S.Avatar source={{ uri: 'https://github.com/gustavoph.png' }} />
      </S.HomeHeader>

      <S.HomeWrapper>
        <PercentCard percentage={97.86} onPress={handleGoStatistic} />

        <S.MealsContainer>
          <Text size="MD">Refeições</Text>

          <S.AddMealButton onPress={handleAddNewMeal}>
            <S.AddMealButtonIcon />
            <Heading size="SM" color="WHITE">
              Nova refeição
            </Heading>
          </S.AddMealButton>

          <S.DailyMealsWrapper>
            <Heading size="LG">12.08.22</Heading>
            <S.MealCard onPress={handleGoMealDetails}>
              <Heading size="XS">20:00</Heading>
              <S.MealSeparator />
              <Text size="SM">Whey com leite </Text>
              <S.MealStatus color="green" />
            </S.MealCard>
            <S.MealCard onPress={handleGoMealDetails}>
              <Heading size="XS">16:00</Heading>
              <S.MealSeparator />
              <Text size="SM">X-tudo</Text>
              <S.MealStatus color="red" />
            </S.MealCard>
          </S.DailyMealsWrapper>
        </S.MealsContainer>
      </S.HomeWrapper>
    </S.HomeContainer>
  )
}
