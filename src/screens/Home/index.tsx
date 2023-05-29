import logo from '@assets/logo.png'
import * as S from './styles'
import { PercentCard } from '@components/PercentCard'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function handleGoDetails() {
    navigation.navigate('details')
  }

  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <S.Logo source={logo} alt="Logo Daily Diet" />
        <S.Avatar source={{ uri: 'https://github.com/gustavoph.png' }} />
      </S.HomeHeader>

      <S.HomeWrapper>
        <PercentCard percentage={97.86} onPress={handleGoDetails} />

        <S.MealsContainer>
          <S.MealsTitle>Refeições</S.MealsTitle>

          <S.AddMealButton>
            <S.AddMealButtonIcon />
            <S.AddMealButtonText>Nova refeição</S.AddMealButtonText>
          </S.AddMealButton>

          <S.DailyMealsWrapper>
            <S.DailyMealsTitle>12.08.22</S.DailyMealsTitle>
            <S.MealCard>
              <S.MealHour>20:00</S.MealHour>
              <S.MealSeparator />
              <S.MealName>Whey protein com leite</S.MealName>
              <S.MealStatus color="green" />
            </S.MealCard>
            <S.MealCard>
              <S.MealHour>16:00</S.MealHour>
              <S.MealSeparator />
              <S.MealName>X-tudo</S.MealName>
              <S.MealStatus color="red" />
            </S.MealCard>
          </S.DailyMealsWrapper>
        </S.MealsContainer>
      </S.HomeWrapper>
    </S.HomeContainer>
  )
}
