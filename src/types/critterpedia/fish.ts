import {
  Availability,
  BaseCritter,
  FishLocation,
  ShadowSize,
  UserCritterPediaData,
} from 'types/critterpedia'

type FishAvailabity = Availability & { location: FishLocation }

export interface CritterpediaFish extends BaseCritter {
  availability: FishAvailabity
  shadow: ShadowSize
}

export interface UserCritterPediaFish
  extends UserCritterPediaData,
    CritterpediaFish {
  availability: FishAvailabity
  shadow: ShadowSize
}
