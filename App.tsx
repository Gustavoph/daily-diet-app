import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans'

import theme from '@themes/index'
import { Routes } from '@routes/index'
import { StatusBar } from 'react-native'

export default function App() {
  const [isLoaded] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  })

  if (!isLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isLoaded && <Routes />}
    </ThemeProvider>
  )
}
