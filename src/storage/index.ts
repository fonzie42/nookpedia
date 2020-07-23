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

