import { LocalizationAvailable } from 'types/critterpedia'

import { HourIntToFormattedStringProps, MonthIntToStringProps } from './types'

const intTo24hFormatHour = (hour: number): string =>
  hour.toString().padStart(2, '0') + ':00'

const intTo12hFormatHour = (hour: number): string => {
  if (hour === 12) {
    return '12 p.m.'
  } else if (hour >= 13) {
    return (hour - 12).toString() + ' p.m.'
  } else {
    return hour.toString() + ' a.m.'
  }
}

export const monthIntToString = ({
  month,
  language,
  format = 'long',
}: MonthIntToStringProps) => {
  const dateToExtractMonthLocale = new Date(Date.UTC(2042, month, 1, 1, 1, 1))
  return dateToExtractMonthLocale.toLocaleDateString(language, {
    month: format,
  })
}

export const hourIntToFormattedString = ({
  hour,
  format,
}: HourIntToFormattedStringProps): string =>
  format === '24h' ? intTo24hFormatHour(hour) : intTo12hFormatHour(hour)

export const findSplitZones = (range: number[]) => {
  let i = 1
  let splitZones: number[] = []

  const LAST_MONTH = 12
  const FIRST_MONTH = 1

  while (i + 1 < range.length) {
    const previousIndex = i - 1

    const previousMonthDifferentThanCurrentMonth =
      range[previousIndex] + 1 !== range[i]

    const previousMonthIsLastMonth = range[previousIndex] === LAST_MONTH
    const currentMonthIsNotFirstMonth = range[i] !== FIRST_MONTH

    if (
      (previousMonthDifferentThanCurrentMonth && !previousMonthIsLastMonth) ||
      (previousMonthIsLastMonth && currentMonthIsNotFirstMonth)
    ) {
      splitZones.push(i)
    }
    i++
  }

  const splitZonesLength = splitZones.length

  if (splitZonesLength > 0) {
    const finalSplitZone = splitZones[splitZonesLength - 1]
    splitZones.push(finalSplitZone)
  }
  return splitZones
}

export const firstAndLastFromArray = <T>(
  array: T[],
): { first: T | null; last: T | null } => {
  const length = array.length
  if (length === 0) {
    return { first: null, last: null }
  }
  if (length === 1) {
    return { first: array[0], last: null }
  }
  return { first: array[0], last: array[length - 1] }
}

const splitArray = ({
  currentIndex,
  splitIndex,
  range,
  splitZones,
}: {
  currentIndex: number
  splitIndex: number
  range: number[]
  splitZones: number[]
}) => {
  if (currentIndex === 0) {
    return range.slice(0, splitIndex)
  }
  if (currentIndex === splitZones.length - 1) {
    return range.slice(splitIndex)
  }
  return range.slice(splitZones[currentIndex - 1], splitIndex)
}

const monthIntervalsWithNoSplit = ({
  range,
  locale,
}: {
  locale: LocalizationAvailable
  range: number[]
}) => {
  const { first, last } = firstAndLastFromArray(range)
  if (first === null) {
    return ''
  }
  if (last === null) {
    return monthIntToString({
      month: first,
      language: locale,
      format: 'short',
    })
  }
  return [first, last]
    .map((month) =>
      monthIntToString({
        month,
        language: locale,
        format: 'short',
      }),
    )
    .join(' - ')
}

const monthIntervalsWithSplit = ({
  range,
  locale,
  splitZones,
}: {
  locale: LocalizationAvailable
  range: number[]
  splitZones: number[]
}) => {
  const intervals = [
    ...splitZones.map((splitIndex, currentIndex) => {
      const newArray = splitArray({
        currentIndex,
        splitIndex,
        range,
        splitZones,
      })
      const { first, last } = firstAndLastFromArray(newArray)
      return [first, last]
    }),
  ].filter(
    (interval): interval is number[] =>
      interval[0] !== null && interval[1] !== null,
  )

  return intervals
    .map((months) =>
      months
        .map((month) =>
          monthIntToString({
            month,
            language: locale,
            format: 'short',
          }),
        )
        .join(' - '),
    )
    .join(', ')
}

export const monthIntervalsFromRange = ({
  range,
  locale,
}: {
  locale: LocalizationAvailable
  range: number[]
}) => {
  const splitZones = findSplitZones(range)

  return splitZones.length === 0
    ? monthIntervalsWithNoSplit({ range, locale })
    : monthIntervalsWithSplit({ range, locale, splitZones })
}
