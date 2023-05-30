import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { PropsWithChildren } from 'react'

export function DismissKeyboard({ children }: PropsWithChildren) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
}
