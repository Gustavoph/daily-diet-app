import { z } from 'zod'
import * as S from './styles'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { useNavigation } from '@react-navigation/native'
import { DatePicker } from '@components/DatePicker'
import { Select } from '@components/Select'
import { DismissKeyboard } from '@components/DismissKeyboard'
// import { CorrectMeal } from '@components/CorrectMeal'
import { IncorrectMeal } from '@components/IncorrectMeal'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const editMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  isOnTheDiet: z.boolean(),
})

type EditMealSchemaType = z.infer<typeof editMealSchema>

export function EditMeal() {
  const navigation = useNavigation()

  const { control, handleSubmit, reset } = useForm<EditMealSchemaType>({
    resolver: zodResolver(editMealSchema),
    defaultValues: { isOnTheDiet: true, createdAt: new Date() },
  })

  function handleGoBack() {
    Promise.all([reset(), navigation.navigate('home')])
  }

  function handleRegisterMeal(data: EditMealSchemaType) {
    console.log('Aqui: ', data)
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
        {/* <CorrectMeal /> */}
        <IncorrectMeal />
      </S.EditMealWrapper>
    </S.EditMealContainer>
  )
}
