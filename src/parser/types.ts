export interface MonthIntToStringProps {
  month: number
  language: string
  format?: 'long' | 'short'
}

export interface HourIntToFormattedStringProps {
  hour: number
  format: '12h' | '24h'
}
