
import { Hemisphere, LocalizationAvailable, UserCritterPediaData } from 'types/critterpedia'

export interface CritterCardProps<T extends UserCritterPediaData> {
  critter: T
  hemisphere: Hemisphere
  locale: LocalizationAvailable
  updateCritterCallback: (updatedCritter: T) => void
}
