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

