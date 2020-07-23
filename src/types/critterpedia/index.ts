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

export type BugLocation =
  | 'Flying by light'
  | 'Flying near hybrid flowers'
  | 'Flying'
  | 'Hitting rocks'
  | 'Near trash'
  | 'On beach rocks'
  | 'On flowers'
  | 'On palm trees'
  | 'On ponds and rivers'
  | 'On rocks (when raining)'
  | 'On rotten food'
  | 'On the beach'
  | 'On the ground'
  | 'On tree stumps'
  | 'On trees'
  | 'On villagers'
  | 'On white flowers'
  | 'Shaking trees'
  | 'Under trees'
  | 'Underground'

export type Rarity = 'Common' | 'Rare' | 'Ultra-rare' | 'Uncommon'

export type Hemisphere = 'Southern' | 'Northern'

export interface Availability {
  location: BugLocation
  northern: number[]
  rarity: Rarity
  southern: number[]
  timeArray: number[]
}

