import { Hemisphere, UserCritterPediaData } from 'types/critterpedia'

export type IsPresentOnCurrentMonthProps = {
  hemisphere: Hemisphere
  isPresent?: boolean
}

export type FilterProps<T extends UserCritterPediaData> = {
  critter: T[]
  filters: ((critter: T) => boolean)[]
}
