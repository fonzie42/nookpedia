import BUGS_CRITTER from 'data/critterpedia/bugs'
import FISH_CRITTER from 'data/critterpedia/fish'

import { UserCritterPediaBugs } from 'types/critterpedia/bug'

type createCritterPediaDataProps = {
  length: number
  isDonatedToMuseum?: boolean
  isRegisteredOnCritterPedia?: boolean
  monthsAvailability?: number[]
  critterType?: 'bugs' | 'fish'
}

export const createCritterPediaData = ({
  length,
  isDonatedToMuseum = false,
  isRegisteredOnCritterPedia = false,
  monthsAvailability,
  critterType = 'bugs',
}: createCritterPediaDataProps) => {
  const base = critterType === 'bugs' ? BUGS_CRITTER.bugs : FISH_CRITTER.fish
  return base.slice(0, length).map(
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
}
