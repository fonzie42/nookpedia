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
}: MonthIntToStringProps) => {
  const dateToExtractMonthLocale = new Date(Date.UTC(2042, month, 1, 1, 1, 1))
  return dateToExtractMonthLocale.toLocaleDateString(language, {
    month: 'long',
  })
}

export const hourIntToFormattedString = ({
  hour,
  format,
}: HourIntToFormattedStringProps): string =>
  format === '24h' ? intTo24hFormatHour(hour) : intTo12hFormatHour(hour)
