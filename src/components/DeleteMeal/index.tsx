import { Heading } from '@components/Heading'

import * as S from './styles'
import { Modal } from 'react-native'
import { Button } from '@components/Button'

interface DeleteMealProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function DeleteMeal({ isOpen, onClose, onConfirm }: DeleteMealProps) {
  return (
    <Modal visible={isOpen} onRequestClose={onClose} transparent={true}>
      <S.DeleteMealCentered>
        <S.DeleteMealContainer>
          <Heading size="LG">Deseja realmente excluir o</Heading>
          <Heading size="LG">registro da refeição?</Heading>

          <S.ButtonGroup>
            <Button
              variant="outlined"
              style={{ width: '47%' }}
              onPress={onClose}
            >
              <Heading>Cancelar</Heading>
            </Button>
            <Button style={{ width: '47%' }} onPress={onConfirm}>
              <Heading color="WHITE">Sim, excluir</Heading>
            </Button>
          </S.ButtonGroup>
        </S.DeleteMealContainer>
      </S.DeleteMealCentered>
    </Modal>
  )
}
