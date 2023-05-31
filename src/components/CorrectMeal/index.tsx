import { Heading } from '@components/Heading'
import * as S from './styles'
import { Text } from '@components/Text'
import successMealImg from '@assets/success-meal.png'
import { Button } from '@components/Button'
import { Modal } from 'react-native'

export function CorrectMeal() {
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

        <Button>
          <Text>Ir para a página inicial</Text>
        </Button>
      </S.ModalWrapper>
    </Modal>
  )
}
