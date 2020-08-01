import { UserCritterpediaData } from 'types/critterpedia/personal'

const getPersonalCritterById = (
  id: number,
  critterPediaData: UserCritterpediaData[],
): UserCritterpediaData => critterPediaData.find((bug) => bug.id === id)!

const createUserCritterPediaData = <U, T extends unknown>(data: U[]): T[] =>
  data.map((item) => ({
    ...item,
    isRegisteredOnCritterPedia: false,
    isDonatedToMuseum: false,
  })) as T[]

const mergeDataWithUserCritterPedia = <
  U extends { id: number },
  T extends unknown
>(
  critterPediaData: UserCritterpediaData[],
  bugs: U[],
): T[] =>
  bugs.map((bug) => {
    const {
      isRegisteredOnCritterPedia,
      isDonatedToMuseum,
    } = getPersonalCritterById(bug.id, critterPediaData)
    return { ...bug, isRegisteredOnCritterPedia, isDonatedToMuseum }
  }) as T[]

export const mergeOrCreateDataWithCritter = <
  U extends { id: number },
  T extends unknown
>(
  critterPediaData: UserCritterpediaData[],
  data: U[],
): T[] =>
  critterPediaData.length === 0
    ? createUserCritterPediaData<U, T>(data)
    : mergeDataWithUserCritterPedia<U, T>(critterPediaData, data)

export const updateCritterInList = <U extends { id: number }>(
  updatedCritter: U,
  allCritter: U[],
): U[] =>
  allCritter.map((critter) =>
    critter.id !== updatedCritter.id ? critter : updatedCritter,
  )
