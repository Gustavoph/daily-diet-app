import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
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

export const DetailsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['2XL']}px;
  `};
`

export const DetailsSubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`

export const DetailsWrapper = styled.View`
  flex: 1;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border-radius: 20px;
  padding: 32px 24px;
`

export const DetailsButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-align: center;
  `};
`

export const SequenceTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`

export const SequenceSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-align: center;
  `};
`

export const Sequence = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  margin-top: 10px;
  border-radius: 8px;

  padding: 16px;
  gap: 8px;

  align-items: center;
`

export const TotalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`

export const TotalSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-align: center;
  `};
`

export const Total = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 8px;

  padding: 16px;
  gap: 8px;

  align-items: center;
`

export const InfoWrapper = styled.View`
  gap: 12px;

  flex-direction: row;
`

export const Success = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  flex: 1;
  padding: 16px;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
`

export const Fail = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  flex: 1;
  padding: 16px;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
`

export const DetailsIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``
