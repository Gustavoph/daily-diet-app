import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

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
        <S.DetailsTitle>98.90%</S.DetailsTitle>
        <S.DetailsSubTitle>das refeições dentro da dieta</S.DetailsSubTitle>
      </S.DetailsHeader>

      <S.DetailsWrapper>
        <S.Title>Estatísticas gerais</S.Title>

        <S.Sequence>
          <S.SequenceTitle>22</S.SequenceTitle>
          <S.SequenceSubtitle>
            melhor sequência de pratos dentro da dieta
          </S.SequenceSubtitle>
        </S.Sequence>

        <S.Total>
          <S.TotalTitle>109</S.TotalTitle>
          <S.TotalSubtitle>refeições registradas</S.TotalSubtitle>
        </S.Total>

        <S.InfoWrapper>
          <S.Success>
            <S.TotalTitle>109</S.TotalTitle>
            <S.TotalSubtitle>refeições registradas</S.TotalSubtitle>
          </S.Success>

          <S.Fail>
            <S.TotalTitle>109</S.TotalTitle>
            <S.TotalSubtitle>refeições registradas</S.TotalSubtitle>
          </S.Fail>
        </S.InfoWrapper>
      </S.DetailsWrapper>
    </S.DetailsContainer>
  )
}
