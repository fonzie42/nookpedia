import { UserCritterPediaData } from 'types/critterpedia'

export interface CritterTableProps<T extends UserCritterPediaData> {
  data: T[]
}
