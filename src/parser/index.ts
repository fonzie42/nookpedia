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

