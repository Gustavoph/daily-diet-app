import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const DetailsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const DetailsHeader = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 32px;

  position: relative;

  margin-bottom: 34px;
`

export const DetailsWrapper = styled.View`
  flex: 1;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  align-items: center;
  border-radius: 20px;
  padding: 32px 24px;
`

export const DetailsButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Sequence = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;

  padding: 16px;
  gap: 8px;

  align-items: center;
`

export const InfoWrapper = styled.View`
  gap: 12px;

  flex-direction: row;
`

export const DetailsIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``
