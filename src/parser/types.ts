export interface MonthIntToStringProps {
  month: number
  language: string
}

export interface HourIntToFormattedStringProps {
  hour: number
  format: '12h' | '24h'
}
