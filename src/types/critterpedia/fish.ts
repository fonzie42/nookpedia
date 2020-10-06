import { BaseCritter } from 'types/critterpedia'
import { UserCritterpediaData } from './personal'

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

export interface CritterpediaFish extends BaseCritter {
  shadow: ShadowSize
}

export interface UserCritterPediaFish
  extends CritterpediaFish,
    UserCritterpediaData {}
