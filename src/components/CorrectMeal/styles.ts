import styled from 'styled-components/native'

export const ModalWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  justify-content: center;
  align-items: center;
`

export const ModalIllustration = styled.Image`
  width: 224px;
  height: 288px;

  margin-top: 40px;
  margin-bottom: 32px;
`
