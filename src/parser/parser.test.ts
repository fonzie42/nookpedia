import {
  findSplitZones,
  hourIntToFormattedString,
  monthIntToString,
} from 'parser'

const monthTestItems = [
  { input: 1, expectedShortOutput: 'Jan', expectedLongOutput: 'January' },
  { input: 2, expectedShortOutput: 'Feb', expectedLongOutput: 'February' },
  { input: 3, expectedShortOutput: 'Mar', expectedLongOutput: 'March' },
  { input: 4, expectedShortOutput: 'Apr', expectedLongOutput: 'April' },
  { input: 5, expectedShortOutput: 'May', expectedLongOutput: 'May' },
  { input: 6, expectedShortOutput: 'Jun', expectedLongOutput: 'June' },
  { input: 7, expectedShortOutput: 'Jul', expectedLongOutput: 'July' },
  { input: 8, expectedShortOutput: 'Aug', expectedLongOutput: 'August' },
  { input: 9, expectedShortOutput: 'Sep', expectedLongOutput: 'September' },
  { input: 10, expectedShortOutput: 'Oct', expectedLongOutput: 'October' },
  { input: 11, expectedShortOutput: 'Nov', expectedLongOutput: 'November' },
  { input: 12, expectedShortOutput: 'Dec', expectedLongOutput: 'December' },
]

const hourTestItems = [
  { input: 0, expectedOutput12h: '0 a.m.', expectedOutput24h: '00:00' },
  { input: 1, expectedOutput12h: '1 a.m.', expectedOutput24h: '01:00' },
  { input: 2, expectedOutput12h: '2 a.m.', expectedOutput24h: '02:00' },
  { input: 3, expectedOutput12h: '3 a.m.', expectedOutput24h: '03:00' },
  { input: 4, expectedOutput12h: '4 a.m.', expectedOutput24h: '04:00' },
  { input: 5, expectedOutput12h: '5 a.m.', expectedOutput24h: '05:00' },
  { input: 6, expectedOutput12h: '6 a.m.', expectedOutput24h: '06:00' },
  { input: 7, expectedOutput12h: '7 a.m.', expectedOutput24h: '07:00' },
  { input: 8, expectedOutput12h: '8 a.m.', expectedOutput24h: '08:00' },
  { input: 9, expectedOutput12h: '9 a.m.', expectedOutput24h: '09:00' },
  { input: 10, expectedOutput12h: '10 a.m.', expectedOutput24h: '10:00' },
  { input: 11, expectedOutput12h: '11 a.m.', expectedOutput24h: '11:00' },
  { input: 12, expectedOutput12h: '12 p.m.', expectedOutput24h: '12:00' },
  { input: 13, expectedOutput12h: '1 p.m.', expectedOutput24h: '13:00' },
  { input: 14, expectedOutput12h: '2 p.m.', expectedOutput24h: '14:00' },
  { input: 15, expectedOutput12h: '3 p.m.', expectedOutput24h: '15:00' },
  { input: 16, expectedOutput12h: '4 p.m.', expectedOutput24h: '16:00' },
  { input: 17, expectedOutput12h: '5 p.m.', expectedOutput24h: '17:00' },
  { input: 18, expectedOutput12h: '6 p.m.', expectedOutput24h: '18:00' },
  { input: 19, expectedOutput12h: '7 p.m.', expectedOutput24h: '19:00' },
  { input: 20, expectedOutput12h: '8 p.m.', expectedOutput24h: '20:00' },
  { input: 21, expectedOutput12h: '9 p.m.', expectedOutput24h: '21:00' },
  { input: 22, expectedOutput12h: '10 p.m.', expectedOutput24h: '22:00' },
  { input: 23, expectedOutput12h: '11 p.m.', expectedOutput24h: '23:00' },
]

describe('monthIntToString', () => {
  it('translates all numbers from range 1 to 12 to a full month name', () => {
    monthTestItems.map(({ input, expectedLongOutput }) => {
      const output = monthIntToString({ language: 'en-US', month: input })
      return expect(output).toEqual(expectedLongOutput)
    })
  })

  it('translates all numbers from range 1 to 12 to a short month name', () => {
    monthTestItems.map(({ input, expectedShortOutput }) => {
      const output = monthIntToString({
        language: 'en-US',
        month: input,
        format: 'short',
      })
      return expect(output).toEqual(expectedShortOutput)
    })
  })
})

describe('hourIntToFormattedString', () => {
  it('translates all numbers from range 0 to 23 to given format (12h)', () => {
    hourTestItems.map(({ input, expectedOutput12h }) => {
      const output = hourIntToFormattedString({ hour: input, format: '12h' })
      return expect(output).toEqual(expectedOutput12h)
    })
  })

  it('translates all numbers from range 0 to 23 to given format (24h)', () => {
    hourTestItems.map(({ input, expectedOutput24h }) => {
      const output = hourIntToFormattedString({ hour: input, format: '24h' })
      return expect(output).toEqual(expectedOutput24h)
    })
  })
})

describe('findSplitZones', () => {
  it('returns an empty interval for continuous numbers from 1 to 12', () => {
    const continuousMonths = [1, 2, 3, 4, 5]
    const firstResult = findSplitZones(continuousMonths)
    expect(firstResult).toEqual([])

    const singleMonth = [1]
    const secondResult = findSplitZones(singleMonth)
    expect(secondResult).toEqual([])
  })

  it('returns an empty interval for a circular interval that goes from 12 to 1', () => {
    const continuousMonths = [10, 11, 12, 1, 2, 3]
    const monthsInterval = findSplitZones(continuousMonths)
    expect(monthsInterval).toEqual([])
  })

  it('returns the split locations of non continuous intervals from 1 to 12', () => {
    const nonContinuousMonths = [1, 2, 3, 6, 7, 8]
    const firstResult = findSplitZones(nonContinuousMonths)
    expect(firstResult).toEqual([3, 3])

    const multipleSplitPoints = [9, 10, 12, 2, 3]
    const secondResult = findSplitZones(multipleSplitPoints)
    expect(secondResult).toEqual([2, 3, 3])
  })

  it('returns the split locations of circular non continuous intervals from 1 to 12', () => {
    const nonContinuousInterval = [10, 11, 1, 2, 3]
    const monthsInterval = findSplitZones(nonContinuousInterval)
    expect(monthsInterval).toEqual([2, 2])
  })
})

