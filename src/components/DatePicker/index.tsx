import dayjs from 'dayjs'
import { Input } from '@components/Input'
import { useRef, useState } from 'react'
import { Keyboard } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

interface DatePickerProps {
  value: Date
  format: string
  mode: 'date' | 'time'
  setValue: (value: Date) => void
}

export function DatePicker({ format, mode, value, setValue }: DatePickerProps) {
  const dateRef = useRef<HTMLInputElement>(null)

  const [showDate, setShowDate] = useState(false)

  const onChange = (
    _: DateTimePickerEvent,
    selectedDate?: Date | undefined,
  ) => {
    setShowDate(false)
    dateRef.current?.blur()
    setValue(selectedDate || new Date())
  }

  const onPress = () => {
    Keyboard.dismiss()
    setShowDate(true)
  }

  return (
    <>
      <Input
        ref={dateRef}
        value={dayjs(value).format(format)}
        onFocus={onPress}
      />
      {showDate && (
        <DateTimePicker mode={mode} value={value} onChange={onChange} />
      )}
    </>
  )
}
