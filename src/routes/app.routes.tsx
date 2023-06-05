import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistic'
import { DetailMeal } from '@screens/DetailMeal'
import { EditMeal } from '@screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="details" component={DetailMeal} />
      <Screen name="new" component={NewMeal} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  )
}
