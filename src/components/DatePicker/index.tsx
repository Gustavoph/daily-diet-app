import dayjs from 'dayjs'
import { Input } from '@components/Input'
import { useRef, useState } from 'react'
import { Keyboard } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

interface DatePickerProps {
  format: string
  mode: 'date' | 'time'
}

export function DatePicker({ format, mode }: DatePickerProps) {
  const dateRef = useRef<HTMLInputElement>(null)

  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)

  const onChange = (
    _: DateTimePickerEvent,
    selectedDate?: Date | undefined,
  ) => {
    setShowDate(false)
    dateRef.current?.blur()
    setDate(selectedDate || new Date())
  }

  const onPress = () => {
    Keyboard.dismiss()
    setShowDate(true)
  }

  return (
    <>
      <Input
        ref={dateRef}
        value={dayjs(date).format(format)}
        onFocus={onPress}
      />
      {showDate && (
        <DateTimePicker mode={mode} value={date} onChange={onChange} />
      )}
    </>
  )
}
