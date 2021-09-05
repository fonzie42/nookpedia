import BUGS from 'data/critterpedia/bugs'
import FISH from 'data/critterpedia/fish'

import { createCritterPediaData } from './critterPediaData'

describe('createCritterPediaData', () => {
  it('returns an array of desired length with unaltared properties from bugs', () => {
    const length = 4
    const createdFixtures = createCritterPediaData({ length })
    expect(createdFixtures.length).toEqual(length)

    const dataWithCritter = BUGS.bugs.slice(0, length).map((item) => ({
      ...item,
      isDonatedToMuseum: false,
      isRegisteredOnCritterPedia: false,
    }))

    expect(createdFixtures).toEqual(dataWithCritter)
  })

  it('returns an array of desired length with unaltared properties from fish', () => {
    const length = 4
    const createdFixtures = createCritterPediaData({
      length,
      critterType: 'fish',
    })
    expect(createdFixtures.length).toEqual(length)

    const dataWithCritter = FISH.fish.slice(0, length).map((item) => ({
      ...item,
      isDonatedToMuseum: false,
      isRegisteredOnCritterPedia: false,
    }))

    expect(createdFixtures).toEqual(dataWithCritter)
  })

  it('returns an array with all items donatedToMuseum set to true', () => {
    const length = 4
    const createdFixtures = createCritterPediaData({
      length,
      isDonatedToMuseum: true,
    })

    createdFixtures.map((item) => expect(item.isDonatedToMuseum).toBeTruthy())
  })

  it('returns an array with all items isRegisteredOnCritterPedia to true', () => {
    const length = 4
    const createdFixtures = createCritterPediaData({
      length,
      isRegisteredOnCritterPedia: true,
    })

    createdFixtures.map((item) =>
      expect(item.isRegisteredOnCritterPedia).toBeTruthy(),
    )
  })

  it('returns an array with custom availability for nouthern and southern hemishphere', () => {
    const length = 4
    const monthsAvailability = [1]
    const createdFixtures = createCritterPediaData({
      length,
      monthsAvailability,
    })

    createdFixtures.map(({ availability: { northern, southern } }) => {
      expect(northern).toEqual(monthsAvailability)
      expect(southern).toEqual(monthsAvailability)
    })
  })
})
