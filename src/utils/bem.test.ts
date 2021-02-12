import { bem } from "./bem"

describe('bem', () => {
  const block = 'block'
  const element = 'element'
  const modifier = 'modifier'

  it('returns a BEM compliant string given a block, an element and a modifier', () => {
    const bemTransformedString = bem({block, element, modifier})
    const expectedResult = `${block}__${element} ${block}__${element}--${modifier}`

    expect(bemTransformedString).toEqual(expectedResult)
  })

  it('returns a BEM compliant string given a block and an element', () => {
    const expectedResult = `${block}__${element}`

    const bemTransformedString = bem({block, element})
    const bemTransformedStringWithEmpty = bem({block, element, modifier: ''})
    const bemTransformedStringWithNull = bem({block, element, modifier: null})
    const bemTransformedStringWithFalse = bem({block, element, modifier: false})

    expect(bemTransformedString).toEqual(expectedResult)
    expect(bemTransformedStringWithEmpty).toEqual(expectedResult)
    expect(bemTransformedStringWithNull).toEqual(expectedResult)
    expect(bemTransformedStringWithFalse).toEqual(expectedResult)
  })

  it('returns a BEM compliant string given a block and a modifier', () => {
    const expectedResult = `${block} ${block}--${modifier}`

    const bemTransformedString = bem({block, modifier})
    const bemTransformedStringWithEmpty = bem({block, modifier, element: ''})
    const bemTransformedStringWithNull = bem({block, modifier, element: null})
    const bemTransformedStringWithFalse = bem({block, modifier, element: false})

    expect(bemTransformedString).toEqual(expectedResult)
    expect(bemTransformedStringWithEmpty).toEqual(expectedResult)
    expect(bemTransformedStringWithNull).toEqual(expectedResult)
    expect(bemTransformedStringWithFalse).toEqual(expectedResult)
  })

  it('returns a BEM compliant string given a block', () => {
    const expectedResult = block

    const bemTransformedString = bem({block})
    const bemTransformedStringWithEmpty = bem({block, element: '', modifier: ''})
    const bemTransformedStringWithNull = bem({block, element: null, modifier: null})
    const bemTransformedStringWithFalse = bem({block, element: false, modifier: false})

    expect(bemTransformedString).toEqual(expectedResult)
    expect(bemTransformedStringWithEmpty).toEqual(expectedResult)
    expect(bemTransformedStringWithNull).toEqual(expectedResult)
    expect(bemTransformedStringWithFalse).toEqual(expectedResult)
  })
})