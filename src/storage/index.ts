import { PersonalCritterPediaData } from 'types/critterpedia'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'

type LocalStorageTypes = 'bugs' | 'fish'

const persistCritterInLocalStorage = (
  critter: UserCritterPediaBugs[] | UserCritterPediaFish[],
  type: LocalStorageTypes,
): void => {
  const userData = (critter as Array<
    UserCritterPediaBugs | UserCritterPediaFish
  >).map(({ id, isRegisteredOnCritterPedia, isDonatedToMuseum }) => ({
    id,
    isRegisteredOnCritterPedia,
    isDonatedToMuseum,
  }))
  const stringfied = JSON.stringify(userData)
  window.localStorage.setItem(`critter-pedia-${type}`, stringfied)
}

const getFromLocalStorage = (
  type: LocalStorageTypes,
): PersonalCritterPediaData[] => {
  const rawData = window.localStorage.getItem(`critter-pedia-${type}`)

  if (!rawData) {
    return []
  }

  return JSON.parse(rawData) as PersonalCritterPediaData[]
}

export const persistBugsInLocalStorage = (bugs: UserCritterPediaBugs[]): void =>
  persistCritterInLocalStorage(bugs, 'bugs')

export const persistFishInLocalStorage = (fish: UserCritterPediaFish[]): void =>
  persistCritterInLocalStorage(fish, 'fish')

export const getBugsFromLocalStorage = (): PersonalCritterPediaData[] =>
  getFromLocalStorage('bugs')

export const getFishFromLocalStorage = (): PersonalCritterPediaData[] =>
  getFromLocalStorage('fish')
