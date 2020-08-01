interface monthIntToStringProps {
  month: number
  language: string
}

export const monthIntToString = ({
  month,
  language,
}: monthIntToStringProps) => {
  const dateToExtractMonthLocale = new Date(Date.UTC(2042, month, 1, 1, 1, 1))
  return dateToExtractMonthLocale.toLocaleDateString(language, {
    month: 'long',
  })
}

interface hourIntToFormattedStringProps {
  hour: number
  format: '12h' | '24h'
}

export const hourIntToFormattedString = ({
  hour,
  format,
}: hourIntToFormattedStringProps): string =>
  format === '24h' ? intTo24hFormatHour(hour) : intTo12hFormatHour(hour)

const intTo12hFormatHour = (hour: number): string => {
  if (hour === 12) {
    return '12 p.m.'
  } else if (hour >= 13) {
    return (hour - 12).toString() + ' p.m.'
  } else {
    return hour.toString() + ' a.m.'
  }
}

const intTo24hFormatHour = (hour: number): string =>
  hour.toString().padStart(2, '0') + ':00'
