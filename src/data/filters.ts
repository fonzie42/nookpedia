import { Hemisphere, UserCritterPediaData } from 'types/critterpedia'
import { getRealCurrentMonth } from '../utils/getRealCurrentMonth'

export type FilterFunction<T extends UserCritterPediaData> = (
  critter: T,
) => boolean

const donatedToMusem = <T extends UserCritterPediaData>(
  shouldBeDonated: boolean,
): FilterFunction<T> => ({ isDonatedToMuseum }: T) =>
  shouldBeDonated ? isDonatedToMuseum : !isDonatedToMuseum

const registeredInCritterPedia = <T extends UserCritterPediaData>(
  shouldBeRegistered: boolean,
): FilterFunction<T> => ({ isRegisteredOnCritterPedia }: T) =>
  shouldBeRegistered ? isRegisteredOnCritterPedia : !isRegisteredOnCritterPedia

type IsPresentOnCurrentMonthProps = {
  hemisphere: Hemisphere
  isPresent?: boolean
}

const isPresentOnCurrentMonth = <T extends UserCritterPediaData>({
  hemisphere,
  isPresent = true,
}: IsPresentOnCurrentMonthProps): FilterFunction<T> => ({
  availability,
}: T) => {
  const currentMonth = getRealCurrentMonth()
  const presentOnMonth = availability[hemisphere].includes(currentMonth)

  return isPresent ? presentOnMonth : !presentOnMonth
}

type filterProps<T extends UserCritterPediaData> = {
  critter: T[]
  filters: ((critter: T) => boolean)[]
}
const filter = <T extends UserCritterPediaData>({
  critter,
  filters,
}: filterProps<T>): T[] =>
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
