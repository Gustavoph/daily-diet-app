import { Heading } from '@components/Heading'
import * as S from './styles'
import { Text } from '@components/Text'
import successMealImg from '@assets/success-meal.png'
import { Button } from '@components/Button'
import { Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function CorrectMeal() {
  const navigation = useNavigation()

  function handleRedirectToHome() {
    navigation.navigate('home')
  }

  return (
    <Modal visible={true}>
      <S.ModalWrapper>
        <Heading size="XL" color="GREEN_DARK">
          Continue assim!
        </Heading>
        <Text>
          Você continua <Heading>dentro da dieta.</Heading> Muito bem!
        </Text>

        <S.ModalIllustration source={successMealImg} />

        <Button style={{ width: 191 }} onPress={handleRedirectToHome}>
          <Text color="WHITE">Ir para a página inicial</Text>
        </Button>
      </S.ModalWrapper>
    </Modal>
  )
}
