import { MealDTO } from '@dtos/meal'

export interface SectionMeal {
  title: string
  data: MealDTO[]
}

export function mapMealsToSectionList(meals: MealDTO[]) {
  const map: Map<string, MealDTO[]> = new Map()

  for (const meal of meals) {
    const date = new Date(meal.createdAt).toISOString().split('T')[0]

    if (map.has(date)) {
      map.get(date)?.push(meal)
    } else {
      map.set(date, [meal])
    }
  }

  const result: SectionMeal[] = []
  map.forEach((value, key) => {
    result.push({ title: key, data: value })
  })

  return result
}
