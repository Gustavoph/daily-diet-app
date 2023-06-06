import { z } from 'zod'
import * as S from './styles'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DatePicker } from '@components/DatePicker'
import { Select } from '@components/Select'
import { DismissKeyboard } from '@components/DismissKeyboard'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MealDTO } from '@dtos/meal'
import { updateMealStorage } from '@storage/meal.storage'

const editMealSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  isOnTheDiet: z.boolean(),
})

type EditMealSchemaType = z.infer<typeof editMealSchema>

export function EditMeal() {
  const { params } = useRoute()
  const { meal } = params as { meal: MealDTO }

  const navigation = useNavigation()

  const { control, handleSubmit, reset } = useForm<EditMealSchemaType>({
    resolver: zodResolver(editMealSchema),
    defaultValues: { ...meal, createdAt: new Date(meal.createdAt) },
  })

  function handleGoBack() {
    Promise.all([reset(), navigation.navigate('home')])
  }

  function handleUpdateMeal(data: EditMealSchemaType) {
    updateMealStorage(data).then(() => handleGoBack())
  }

  return (
    <S.EditMealContainer>
      <S.EditMealHeader>
        <S.GoBackButton onPress={handleGoBack}>
          <S.EditMealIcon />
        </S.GoBackButton>
        <Heading size="LG">Editar refeição</Heading>
      </S.EditMealHeader>
      <S.EditMealWrapper>
        <DismissKeyboard>
          <S.FormGroup>
            <Heading size="XS">Nome</Heading>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input onChangeText={onChange} value={value} />
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
              render={({ field: { onChange, value } }) => (
                <TextArea
                  multiline={true}
                  numberOfLines={5}
                  value={value}
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
        <S.RegisterMealButton onPress={handleSubmit(handleUpdateMeal)}>
          <Heading color="WHITE">Atualizar refeição</Heading>
        </S.RegisterMealButton>
      </S.EditMealWrapper>
    </S.EditMealContainer>
  )
}
