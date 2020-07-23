export interface LocalizationString {
  'de-EU': string
  'en-EU': string
  'en-US': string
  'es-EU': string
  'es-US': string
  'fr-EU': string
  'fr-US': string
  'it-EU': string
  'ja-JP': string
  'ko-KR': string
  'nl-EU': string
  'ru-EU': string
  'zh-CN': string
  'zh-TW': string
}

export type LocalizationAvailable = keyof LocalizationString

export type Hemisphere = 'Southern' | 'Northern'

