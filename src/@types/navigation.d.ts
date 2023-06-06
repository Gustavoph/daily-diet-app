import { MealDTO } from '@dtos/meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      new: undefined
      edit: { meal: MealDTO }
      details: { id: string }
    }
  }
}
