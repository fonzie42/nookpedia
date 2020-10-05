import { Hemisphere } from 'types/critterpedia'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'

type FilterFunction = (bug: UserCritterPediaBugs) => boolean

const donatedToMusem = (shouldBeDonated: boolean): FilterFunction => ({
  isDonatedToMuseum,
}: UserCritterPediaBugs) =>
  shouldBeDonated ? isDonatedToMuseum : !isDonatedToMuseum

const registeredInCritterPedia = (
  shouldBeRegistered: boolean,
): FilterFunction => ({ isRegisteredOnCritterPedia }: UserCritterPediaBugs) =>
  shouldBeRegistered ? isRegisteredOnCritterPedia : !isRegisteredOnCritterPedia

const isPresentOnCurrentMonth = (
  hemisphere: Hemisphere,
  month: number,
): FilterFunction => ({ availability }: UserCritterPediaBugs) =>
  !!availability[hemisphere].find((item) => item === month)

type filterProps = {
  bugs: UserCritterPediaBugs[]
  filters: ((bug: UserCritterPediaBugs) => boolean)[]
}
const filter = ({ bugs, filters }: filterProps): UserCritterPediaBugs[] =>
  bugs.filter((bug) =>
    filters
      .map((filterFunction) => filterFunction(bug))
      .reduce((total, current) => total && current, true),
  )

const filterFunctions = {
  donatedToMusem,
  registeredInCritterPedia,
  isPresentOnCurrentMonth,
}

export { filter, filterFunctions }
