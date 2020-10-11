import { Hemisphere, UserCritterPediaData } from 'types/critterpedia'

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

const isPresentOnCurrentMonth = <T extends UserCritterPediaData>(
  hemisphere: Hemisphere,
  month: number,
): FilterFunction<T> => ({ availability }: T) =>
  !!availability[hemisphere].find((item) => item === month)

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
