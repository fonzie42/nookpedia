import { mergeOrCreateDataWithCritter } from 'critterPedia'
import { UserCritterpediaData } from 'types/critterpedia/personal'

type genericTypeWithId = { id: number }
type genericTypeWithIdAndCritter = genericTypeWithId & UserCritterpediaData

const arrayWithGenericIds = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
] as genericTypeWithId[]

const arrayWithUserCritterpediaData = [
  { id: 1, isDonatedToMuseum: true, isRegisteredOnCritterPedia: false },
  { id: 2, isDonatedToMuseum: false, isRegisteredOnCritterPedia: true },
  { id: 3, isDonatedToMuseum: true, isRegisteredOnCritterPedia: true },
  { id: 4, isDonatedToMuseum: false, isRegisteredOnCritterPedia: false },
  { id: 5, isDonatedToMuseum: false, isRegisteredOnCritterPedia: false },
] as UserCritterpediaData[]

describe('mergeOrCreateDataWithCritter', () => {
  it('should create default UserCritterPediaData when none is given and merge data with type without UserCritterPediaData to one with it', () => {
    const output = mergeOrCreateDataWithCritter<
      genericTypeWithId,
      genericTypeWithIdAndCritter
    >([], arrayWithGenericIds)

    output.map((item) => {
      const { isDonatedToMuseum, isRegisteredOnCritterPedia } = item
      expect(isDonatedToMuseum).toBeFalsy()
      expect(isRegisteredOnCritterPedia).toBeFalsy()
      return item
    })
  })

  it('should merge the given UserCritterPediaData with data from a type without UserCritter and return an array with merged values', () => {
    const output = mergeOrCreateDataWithCritter<
      genericTypeWithId,
      genericTypeWithIdAndCritter
    >(arrayWithUserCritterpediaData, arrayWithGenericIds)

    output.map(({ isDonatedToMuseum, isRegisteredOnCritterPedia, id }) => {
      const expectedOutput = arrayWithUserCritterpediaData.find(
        (critter) => critter.id === id,
      )

      expect(isDonatedToMuseum).toEqual(
        expectedOutput && expectedOutput.isDonatedToMuseum,
      )
      expect(isRegisteredOnCritterPedia).toEqual(
        expectedOutput && expectedOutput.isRegisteredOnCritterPedia,
      )
      return id
    })
  })
})
