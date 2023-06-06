import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealDTO } from '@dtos/meal'
import { MEAL_STORAGE } from './storage.config'

interface CreateMeal {
  name: string
  description: string
  createdAt: Date
  isOnTheDiet: boolean
}

export async function createMealStorage(meal: CreateMeal) {
  const storage = await fetchMealsStorage()

  storage.push({
    id: new Date().valueOf().toString(),
    ...meal,
  })

  await AsyncStorage.setItem(MEAL_STORAGE, JSON.stringify(storage))
}

export async function fetchMealsStorage() {
  const storage = await AsyncStorage.getItem(MEAL_STORAGE)
  const meals: MealDTO[] = storage ? JSON.parse(storage) : []
  return meals
}

export async function getMealsStorage(id: string) {
  const storage = await fetchMealsStorage()
  return storage.find((meal) => meal.id === id)
}

export async function updateMealStorage(meal: MealDTO) {
  const storage = await fetchMealsStorage()
  const mealIndex = storage.findIndex((item) => item.id === meal.id)

  if (mealIndex > -1) {
    storage[mealIndex] = meal
    await AsyncStorage.setItem(MEAL_STORAGE, JSON.stringify(storage))
  }
}

export async function removeMealStorage(meal: MealDTO) {
  const storage = await fetchMealsStorage()
  const mealIndex = storage.findIndex((item) => item.id === meal.id)

  if (mealIndex) {
    storage.splice(mealIndex, 1)
    await AsyncStorage.setItem(MEAL_STORAGE, JSON.stringify(storage))
  }
}
