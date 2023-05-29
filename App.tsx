import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans'

import theme from '@themes/index'
import { Routes } from '@routes/index'

export default function App() {
  const [isLoaded] = useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  })

  if (!isLoaded) {
    return null
  }

  return <ThemeProvider theme={theme}>{isLoaded && <Routes />}</ThemeProvider>
}
