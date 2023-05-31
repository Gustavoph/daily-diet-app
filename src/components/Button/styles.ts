import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`
