import { UserCritterPediaData } from 'types/critterpedia'

import { getRealCurrentMonth } from '../utils/getRealCurrentMonth'

import { FilterProps, IsPresentOnCurrentMonthProps } from './filters.types'

export type FilterFunction<T extends UserCritterPediaData> = (
  critter: T,
) => boolean

const donatedToMusem =
  <T extends UserCritterPediaData>(
    shouldBeDonated: boolean,
  ): FilterFunction<T> =>
  ({ isDonatedToMuseum }: T) =>
    shouldBeDonated ? isDonatedToMuseum : !isDonatedToMuseum

const registeredInCritterPedia =
  <T extends UserCritterPediaData>(
    shouldBeRegistered: boolean,
  ): FilterFunction<T> =>
  ({ isRegisteredOnCritterPedia }: T) =>
    shouldBeRegistered
      ? isRegisteredOnCritterPedia
      : !isRegisteredOnCritterPedia

const isPresentOnCurrentMonth =
  <T extends UserCritterPediaData>({
    hemisphere,
    isPresent = true,
  }: IsPresentOnCurrentMonthProps): FilterFunction<T> =>
  ({ availability }: T) => {
    const currentMonth = getRealCurrentMonth()
    const presentOnMonth = availability[hemisphere].includes(currentMonth)

    return isPresent ? presentOnMonth : !presentOnMonth
  }

const filter = <T extends UserCritterPediaData>({
  critter,
  filters,
}: FilterProps<T>): T[] =>
  critter.filter((entry) =>
    filters
      .map((filterFunction) => filterFunction(entry))
      .reduce((total, current) => total && current, true),
  )

const filterFunctions = {
  donatedToMusem,
  registeredInCritterPedia,
  isPresentOnCurrentMonth,
}

export { filter, filterFunctions }
