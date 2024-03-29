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
  | 'Flying (near water)'
  | 'Hitting rocks'
  | 'Near trash'
  | 'On beach rocks'
  | 'On flowers'
  | 'On palm trees'
  | 'On ponds and rivers'
  | 'On rocks (when raining)'
  | 'On rocks and bush (when raining)'
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

export type FishLocation =
  | 'Pier'
  | 'Pond'
  | 'River (Clifftop) & Pond'
  | 'River (Clifftop)'
  | 'River (Mouth)'
  | 'River'
  | 'Sea'
  | 'Sea (when raining or snowing)'

export type ShadowSize =
  | 'Narrow'
  | 'Smallest (1)'
  | 'Small (2)'
  | 'Medium (3)'
  | 'Medium (4)'
  | 'Medium with fin (4)'
  | 'Large (5)'
  | 'Largest (6)'
  | 'Largest with fin (6)'

export const RARITIES = ['Common', 'Uncommon', 'Rare', 'Ultra-rare'] as const

export type Rarity = typeof RARITIES[number]

export enum Hemisphere {
  SOUTHERN = 'southern',
  NORTHERN = 'northern',
}

export interface Availability {
  location: BugLocation | FishLocation
  northern: number[]
  rarity: Rarity
  southern: number[]
  timeArray: number[]
}

export interface BaseCritter {
  altCatchPhrase?: string[]
  availability: Availability
  catchPhrase: string
  filePath: string
  iconUri: string
  id: number
  imageUri: string
  museumPhrase: string
  name: LocalizationString
  price: number
  priceExtra: number
  shadow?: ShadowSize
}

export interface PersonalCritterPediaData {
  id: number
  isDonatedToMuseum: boolean
  isRegisteredOnCritterPedia: boolean
}

export interface UserCritterPediaData
  extends BaseCritter,
    PersonalCritterPediaData {}
