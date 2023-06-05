import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const DetailsMealContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const DetailsMealHeader = styled.View`
  align-items: center;
  position: relative;
  padding: 24px;
`

export const DetailsMealWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border-radius: 20px;
  padding: 24px;
`

export const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  left: 24px;
`

export const StatusMealWrapper = styled.View`
  width: 144px;
  height: 34px;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  justify-content: center;

  padding: 8px 16px;
  gap: 8px;

  flex-direction: row;
  align-items: center;
`

export const StatusMealIndicator = styled.View`
  width: 8px;
  height: 8px;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`

export const FormGroup = styled.View`
  gap: 4px;
  margin-bottom: 24px;
`

export const FormWrapper = styled.View`
  gap: 10px;
  margin-top: auto;
`

export const EditMealIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``

export const DeleteMealIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_2,
}))``

export const DetailsMealIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``
