import { Heading } from '@components/Heading'
import * as S from './styles'
import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { useNavigation } from '@react-navigation/native'
import { DatePicker } from '@components/DatePicker'
import { Select } from '@components/Select'
import { useState } from 'react'
import { DismissKeyboard } from '@components/DismissKeyboard'

export function NewMeal() {
  const [option, setOption] = useState('yes')

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <S.NewMealContainer>
      <S.NewMealHeader>
        <S.GoBackButton onPress={handleGoBack}>
          <S.NewMealIcon />
        </S.GoBackButton>
        <Heading size="LG">Nova refeição</Heading>
      </S.NewMealHeader>
      <S.NewMealWrapper>
        <DismissKeyboard>
          <S.FormGroup>
            <Heading size="XS">Nome</Heading>
            <Input />
          </S.FormGroup>
        </DismissKeyboard>

        <DismissKeyboard>
          <S.FormGroup>
            <Heading size="XS">Descrição</Heading>
            <TextArea
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
            />
          </S.FormGroup>
        </DismissKeyboard>

        <S.FormWrapper>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Data</Heading>
            <DatePicker format="DD/MM/YYYY" mode="date" />
          </S.FormGroup>

          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Hora</Heading>
            <DatePicker format="HH:mm" mode="time" />
          </S.FormGroup>
        </S.FormWrapper>

        <S.FormWrapper style={{ marginBottom: 'auto' }}>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Está dentro da dieta ?</Heading>
            <Select
              label="Sim"
              activeColor="green"
              isActive={option === 'yes'}
              onPress={() => setOption('yes')}
            />
          </S.FormGroup>

          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS" />
            <Select
              label="Não"
              activeColor="red"
              isActive={option === 'no'}
              onPress={() => setOption('no')}
            />
          </S.FormGroup>
        </S.FormWrapper>

        <S.RegisterMealButton>
          <Heading color="WHITE">Cadastrar refeição</Heading>
        </S.RegisterMealButton>
      </S.NewMealWrapper>
    </S.NewMealContainer>
  )
}
