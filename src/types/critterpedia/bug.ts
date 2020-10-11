import {
  Availability,
  BaseCritter,
  BugLocation,
  UserCritterPediaData,
} from 'types/critterpedia'

type BugAvailabity = Availability & { location: BugLocation }

export interface CritterpediaBugs extends BaseCritter {
  availability: BugAvailabity
  shadow?: undefined
}

export interface UserCritterPediaBugs
  extends UserCritterPediaData,
    CritterpediaBugs {
  availability: BugAvailabity
  shadow?: undefined
}
