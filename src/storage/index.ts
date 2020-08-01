import { UserCritterpediaData } from 'types/critterpedia/personal'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'

export const persistBugsInLocalStorage = (
  bugs: UserCritterPediaBugs[],
): void => {
  const userData = bugs.map(
    ({ id, isRegisteredOnCritterPedia, isDonatedToMuseum }) => ({
      id,
      isRegisteredOnCritterPedia,
      isDonatedToMuseum,
    }),
  )
  const stringfied = JSON.stringify(userData)
  window.localStorage.setItem(`critter-pedia-bugs`, stringfied)
}

export const getBugsFromLocalStorage = (): UserCritterpediaData[] => {
  const rawData = window.localStorage.getItem(`critter-pedia-bugs`)

  if (!rawData) {
    return []
  }

  return JSON.parse(rawData) as UserCritterpediaData[]
}
