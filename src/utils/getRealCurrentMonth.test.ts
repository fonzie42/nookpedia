import { getRealCurrentMonth } from './getRealCurrentMonth'

describe('getRealCurrentMonth', () => {
  it('returns the Current Month + 1, to be equal to the calendar month', () => {
    const currentMonth = new Date().getMonth()
    expect(getRealCurrentMonth()).toEqual(currentMonth + 1)
  })
})
