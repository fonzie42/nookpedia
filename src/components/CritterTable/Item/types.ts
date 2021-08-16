import { UserCritterPediaData } from 'types/critterpedia'

export interface ItemProps<T extends UserCritterPediaData> {
  critter: T
}