import { MealDTO } from '@dtos/meal'

export function mealsReducer(meals: MealDTO[]) {
  let bestStreak = 0
  let currentStreak = 0

  return meals.reduce(
    (acc, meal) => {
      acc.totalMeals += 1

      if (meal.isOnTheDiet) {
        currentStreak += 1
        acc.correctMeals += 1
      } else {
        currentStreak = 0
        acc.wrongMeals += 1
      }

      if (currentStreak > bestStreak) {
        bestStreak = currentStreak
      }

      acc.percentage = Math.floor((acc.correctMeals / acc.totalMeals) * 100)
      acc.streak = bestStreak
      return acc
    },
    {
      streak: 0,
      percentage: 0,
      totalMeals: 0,
      correctMeals: 0,
      wrongMeals: 0,
    },
  )
}
