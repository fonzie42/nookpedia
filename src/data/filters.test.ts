import { createCritterPediaData } from 'fixtures/critterPediaData'
import { Hemisphere } from 'types/critterpedia'

import { filter, filterFunctions } from './filters'

describe('filter', () => {
  describe('donatedToMusem', () => {
    const notDonated = createCritterPediaData({
      length: 5,
    })
    const donated = createCritterPediaData({
      length: 5,
      isDonatedToMuseum: true,
    })

    it('returns all data that were donated to the museum when <true> is passed', () => {
      const filteredData = filter({
        critter: [...notDonated, ...donated],
        filters: [filterFunctions.donatedToMusem(true)],
      })
      expect(filteredData).toEqual(donated)

      notDonated.map((item) => expect(filteredData).not.toContain(item))
    })

    it('returns all data that were not donated to the museum when <false> is passed', () => {
      const filteredData = filter({
        critter: [...notDonated, ...donated],
        filters: [filterFunctions.donatedToMusem(false)],
      })
      expect(filteredData).toEqual(notDonated)

      donated.map((item) => expect(filteredData).not.toContain(item))
    })
  })

  describe('registeredInCritterPedia', () => {
    const notRegistered = createCritterPediaData({
      length: 5,
    })
    const registered = createCritterPediaData({
      length: 5,
      isRegisteredOnCritterPedia: true,
    })

    it('returns all data that were registered when <true> is passed', () => {
      const filteredData = filter({
        critter: [...notRegistered, ...registered],
        filters: [filterFunctions.registeredInCritterPedia(true)],
      })
      expect(filteredData).toEqual(registered)

      notRegistered.map((item) => expect(filteredData).not.toContain(item))
    })

    it('returns all data that were not registered when <false> is passed', () => {
      const filteredData = filter({
        critter: [...notRegistered, ...registered],
        filters: [filterFunctions.registeredInCritterPedia(false)],
      })
      expect(filteredData).toEqual(notRegistered)

      registered.map((item) => expect(filteredData).not.toContain(item))
    })
  })

  describe('isPresentOnCurrentMonth', () => {
    let dateNowSpy: jest.SpyInstance

    beforeEach(() => {
      dateNowSpy = jest.spyOn(Date.prototype, 'getMonth').mockReturnValue(1)
    })

    afterEach(() => {
      dateNowSpy.mockRestore()
    })

    const notPresentNow = createCritterPediaData({
      length: 5,
      monthsAvailability: [1],
    })
    const presentNow = createCritterPediaData({
      length: 5,
      monthsAvailability: [2],
    })

    it('returns all data that were registered when <{hemisphere: southern, isPresent: true}> is passed', () => {
      const filteredData = filter({
        critter: [...notPresentNow, ...presentNow],
        filters: [
          filterFunctions.isPresentOnCurrentMonth({
            hemisphere: Hemisphere.SOUTHERN,
            isPresent: true,
          }),
        ],
      })

      expect(filteredData).toEqual(presentNow)

      notPresentNow.map((item) => expect(filteredData).not.toContain(item))
    })

    it('returns all data that were not registered when <{hemisphere: southern, isPresent: false}> is passed', () => {
      const filteredData = filter({
        critter: [...notPresentNow, ...presentNow],
        filters: [
          filterFunctions.isPresentOnCurrentMonth({
            hemisphere: Hemisphere.SOUTHERN,
            isPresent: false,
          }),
        ],
      })
      expect(filteredData).toEqual(notPresentNow)

      presentNow.map((item) => expect(filteredData).not.toContain(item))
    })

    it('returns all data that were registered when <{hemisphere: northern, isPresent: true}> is passed', () => {
      const filteredData = filter({
        critter: [...notPresentNow, ...presentNow],
        filters: [
          filterFunctions.isPresentOnCurrentMonth({
            hemisphere: Hemisphere.NORTHERN,
            isPresent: true,
          }),
        ],
      })
      expect(filteredData).toEqual(presentNow)

      notPresentNow.map((item) => expect(filteredData).not.toContain(item))
    })

    it('returns all data that were not registered when <{hemisphere: northern, isPresent: false}> is passed', () => {
      const filteredData = filter({
        critter: [...notPresentNow, ...presentNow],
        filters: [
          filterFunctions.isPresentOnCurrentMonth({
            hemisphere: Hemisphere.NORTHERN,
            isPresent: false,
          }),
        ],
      })
      expect(filteredData).toEqual(notPresentNow)

      presentNow.map((item) => expect(filteredData).not.toContain(item))
    })
  })
})
