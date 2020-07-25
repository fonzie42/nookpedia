import { monthIntToString } from 'parser'

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


describe('monthIntToString', () => {
  it('should translate all numbers from range 1 to 12 to a full month name', () => {
    monthTestItems.map(({ input, expectedOutput }) => {
      const output = monthIntToString({ language: 'en-US', month: input })
      return expect(output).toEqual(expectedOutput)
    })
  })
})

