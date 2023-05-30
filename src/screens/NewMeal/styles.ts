import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const NewMealContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const NewMealHeader = styled.View`
  align-items: center;
  position: relative;
  padding: 24px;
`

export const NewMealWrapper = styled.View`
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

export const FormGroup = styled.View`
  gap: 4px;
  margin-bottom: 24px;
`

export const FormWrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const RegisterMealButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const NewMealIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``
