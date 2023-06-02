import { Heading } from '@components/Heading'
import * as S from './styles'
import { Text } from '@components/Text'
import wrongMealImg from '@assets/wrong-meal.png'
import { Button } from '@components/Button'
import { Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function IncorrectMeal() {
  const navigation = useNavigation()

  function handleRedirectToHome() {
    navigation.navigate('home')
  }

  return (
    <Modal visible={false}>
      <S.ModalWrapper>
        <Heading size="XL" color="RED_DARK">
          Que pena!
        </Heading>
        <Text style={{ textAlign: 'center' }}>
          Você <Heading>saiu da dieta</Heading> Dessa vez, mas continue se
          esforçando e não desista!
        </Text>

        <S.ModalIllustration source={wrongMealImg} />

        <Button style={{ width: 191 }} onPress={handleRedirectToHome}>
          <Text color="WHITE">Ir para a página inicial</Text>
        </Button>
      </S.ModalWrapper>
    </Modal>
  )
}
