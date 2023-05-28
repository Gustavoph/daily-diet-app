import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  NunitoSans_700Bold as NunitoSans700Bold,
  NunitoSans_400Regular as NunitoSans400Regular,
} from '@expo-google-fonts/nunito-sans'

import theme from '@themes/default'

export default function App() {
  const [isLoaded] = useFonts({
    NunitoSans400Regular,
    NunitoSans700Bold,
  })

  if (!isLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
