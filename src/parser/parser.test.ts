import { hourIntToFormattedString, monthIntToString } from 'parser'

const monthTestItems = [
  { input: 1, expectedOutput: 'January' },
  { input: 2, expectedOutput: 'February' },
  { input: 3, expectedOutput: 'March' },
  { input: 4, expectedOutput: 'April' },
  { input: 5, expectedOutput: 'May' },
  { input: 6, expectedOutput: 'June' },
  { input: 7, expectedOutput: 'July' },
  { input: 8, expectedOutput: 'August' },
  { input: 9, expectedOutput: 'September' },
  { input: 10, expectedOutput: 'October' },
  { input: 11, expectedOutput: 'November' },
  { input: 12, expectedOutput: 'December' },
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
  it('should translate all numbers from range 1 to 12 to a full month name', () => {
    monthTestItems.map(({ input, expectedOutput }) => {
      const output = monthIntToString({ language: 'en-US', month: input })
      return expect(output).toEqual(expectedOutput)
    })
  })
})

describe('hourIntToFormattedString', () => {
  it('should translate all numbers from range 0 to 23 to given format (12h)', () => {
    hourTestItems.map(({ input, expectedOutput12h }) => {
      const output = hourIntToFormattedString({ hour: input, format: '12h' })
      return expect(output).toEqual(expectedOutput12h)
    })
  })

  it('should translate all numbers from range 0 to 23 to given format (24h)', () => {
    hourTestItems.map(({ input, expectedOutput24h }) => {
      const output = hourIntToFormattedString({ hour: input, format: '24h' })
      return expect(output).toEqual(expectedOutput24h)
    })
  })
})
