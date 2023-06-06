import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { DatePicker } from '@components/DatePicker'
import { Select } from '@components/Select'
import { DismissKeyboard } from '@components/DismissKeyboard'
import { CorrectMeal } from '@components/CorrectMeal'
import { IncorrectMeal } from '@components/IncorrectMeal'
import { createMealStorage } from '@storage/meal.storage'

const newMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  isOnTheDiet: z.boolean(),
})

type NewMealSchemaType = z.infer<typeof newMealSchema>

export function NewMeal() {
  const [showBanner, setShowBanner] = useState<boolean | null>(null)
  const navigation = useNavigation()

  const { control, handleSubmit, reset } = useForm<NewMealSchemaType>({
    resolver: zodResolver(newMealSchema),
    defaultValues: { isOnTheDiet: true, createdAt: new Date() },
  })

  function handleGoBack() {
    Promise.all([reset(), navigation.navigate('home')])
  }

  async function handleRegisterMeal(data: NewMealSchemaType) {
    createMealStorage(data).then(() => {
      setShowBanner(data.isOnTheDiet)
    })
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
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange } }) => (
                <Input onChangeText={onChange} />
              )}
            />
          </S.FormGroup>
        </DismissKeyboard>
        <DismissKeyboard>
          <S.FormGroup>
            <Heading size="XS">Descrição</Heading>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange } }) => (
                <TextArea
                  multiline={true}
                  numberOfLines={5}
                  textAlignVertical="top"
                  onChangeText={onChange}
                />
              )}
            />
          </S.FormGroup>
        </DismissKeyboard>
        <S.FormWrapper>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Data</Heading>
            <Controller
              control={control}
              name="createdAt"
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  mode="date"
                  value={value}
                  setValue={onChange}
                  format="DD/MM/YYYY"
                />
              )}
            />
          </S.FormGroup>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Hora</Heading>
            <Controller
              control={control}
              name="createdAt"
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  mode="time"
                  format="HH:mm"
                  value={value}
                  setValue={onChange}
                />
              )}
            />
          </S.FormGroup>
        </S.FormWrapper>
        <S.FormWrapper style={{ marginBottom: 'auto' }}>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS">Está dentro da dieta ?</Heading>
            <Controller
              control={control}
              name="isOnTheDiet"
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Sim"
                  activeColor="green"
                  isActive={value}
                  onPress={() => onChange(true)}
                />
              )}
            />
          </S.FormGroup>
          <S.FormGroup style={{ width: '47%' }}>
            <Heading size="XS" />
            <Controller
              control={control}
              name="isOnTheDiet"
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Não"
                  activeColor="red"
                  isActive={!value}
                  onPress={() => onChange(false)}
                />
              )}
            />
          </S.FormGroup>
        </S.FormWrapper>
        <S.RegisterMealButton onPress={handleSubmit(handleRegisterMeal)}>
          <Heading color="WHITE">Cadastrar refeição</Heading>
        </S.RegisterMealButton>

        {showBanner ? <CorrectMeal /> : <IncorrectMeal />}
      </S.NewMealWrapper>
    </S.NewMealContainer>
  )
}
