import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './src/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
