import BUGS_CRITTER from 'data/critterpedia/bugs'

import { UserCritterPediaBugs } from 'types/critterpedia/bug'

type createCritterPediaDataProps = {
  length: number
  isDonatedToMuseum?: boolean
  isRegisteredOnCritterPedia?: boolean
  monthsAvailability?: number[]
}

export const createCritterPediaData = ({
  length,
  isDonatedToMuseum = false,
  isRegisteredOnCritterPedia = false,
  monthsAvailability,
}: createCritterPediaDataProps) =>
  BUGS_CRITTER.bugs.slice(0, length).map(
    (item) =>
      ({
        ...item,
        isRegisteredOnCritterPedia,
        isDonatedToMuseum,
        availability: {
          ...item.availability,
          southern: monthsAvailability ?? item.availability.southern,
          northern: monthsAvailability ?? item.availability.northern,
        },
      } as UserCritterPediaBugs),
  )
