import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  NunitoSans_700Bold as NunitoSans700Bold,
  NunitoSans_400Regular as NunitoSans400Regular,
} from '@expo-google-fonts/nunito-sans'

import theme from '@themes/index'
import { Routes } from '@routes/index'

export default function App() {
  const [isLoaded] = useFonts({
    NunitoSans400Regular,
    NunitoSans700Bold,
  })

  if (!isLoaded) {
    return null
  }

  return <ThemeProvider theme={theme}>{isLoaded && <Routes />}</ThemeProvider>
}
