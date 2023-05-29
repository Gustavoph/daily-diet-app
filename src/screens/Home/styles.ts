import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 0 24px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const HomeHeader = styled.View`
  padding-top: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 999px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const HomeWrapper = styled.ScrollView`
  flex: 1;
  margin-top: 36px;
`

export const MealsContainer = styled.View`
  margin-top: 40px;
`

export const MealsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`

export const DailyMealsWrapper = styled.View`
  width: 100%;
  gap: 8px;
  margin-top: 32px;
`

export const DailyMealsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`

export const MealCard = styled.View`
  height: 50px;

  gap: 12px;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px 16px 14px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const MealSeparator = styled.View`
  border-left-width: 1px;

  height: 14px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const MealHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `};
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};

  margin-right: auto;
`

interface MealStatusProps {
  color: 'green' | 'red'
}

export const MealStatus = styled.View<MealStatusProps>`
  height: 14px;
  width: 14px;

  border-radius: 999px;
  background-color: ${({ theme, color = 'green' }) =>
    color === 'green' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

export const AddMealButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;
  margin-top: 8px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const AddMealButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`

export const AddMealButtonIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``
