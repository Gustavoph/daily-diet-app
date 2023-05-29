import { Heading } from '@components/Heading'
import * as S from './styles'
import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { useNavigation } from '@react-navigation/native'

export function NewMeal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <S.NewMealContainer>
      <S.NewMealHeader>
        <S.GoBackButton onPress={handleGoBack}>
          <S.NewMealIcon />
        </S.GoBackButton>
        <Heading size="LG">Nova refeição</Heading>
      </S.NewMealHeader>

      <S.NewMealWrapper>
        <S.FormGroup>
          <Heading size="XS">Nome</Heading>
          <Input />
        </S.FormGroup>

        <S.FormGroup>
          <Heading size="XS">Descrição</Heading>
          <TextArea multiline={true} numberOfLines={5} />
        </S.FormGroup>
      </S.NewMealWrapper>
    </S.NewMealContainer>
  )
}
