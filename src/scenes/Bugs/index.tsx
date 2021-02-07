import React, { useEffect, useState } from 'react'

import CRITTERPEDIA_BUGS from 'data/critterpedia/bugs'
import { CritterCard } from 'components/CritterCard'
import { getBugsFromLocalStorage, persistBugsInLocalStorage } from 'storage'
import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import { CritterpediaBugs, UserCritterPediaBugs } from 'types/critterpedia/bug'
import { filter, filterFunctions } from 'data/filters'
import { Toggle } from 'ui/Toggle'
import { CritterTable } from 'components/CritterTable'
import { UserCritterPediaData } from 'types/critterpedia'

type Filters = {
  isDonatedToMuseum: boolean | null
  isRegisteredOnCritterPedia: boolean | null
  isPresentOnCurrentMonth: boolean | null
}

const Bugs = () => {
  const [personalCritter, setPersonalCritter] = useState<
    UserCritterPediaBugs[]
  >([])

  const [activeFilters, setActiveFilters] = useState<Filters>({
    isDonatedToMuseum: null,
    isRegisteredOnCritterPedia: null,
    isPresentOnCurrentMonth: null,
  })

  useEffect(() => {
    const { bugs } = CRITTERPEDIA_BUGS
    const userData = getBugsFromLocalStorage()
    const firstPersonalCritter = mergeOrCreateDataWithCritter<
      CritterpediaBugs,
      UserCritterPediaBugs
    >(userData, bugs)
    setPersonalCritter(firstPersonalCritter)
  }, [])

  useEffect(() => {
    persistBugsInLocalStorage(personalCritter)
  }, [personalCritter])

  const updateCritter = (
    updatedCritter: UserCritterPediaBugs,
    critterList: UserCritterPediaBugs[],
  ): UserCritterPediaBugs[] =>
    updateCritterInList<UserCritterPediaBugs>(updatedCritter, critterList)

  const filters = [
    activeFilters.isDonatedToMuseum !== null &&
      filterFunctions.donatedToMusem(activeFilters.isDonatedToMuseum),

    activeFilters.isRegisteredOnCritterPedia !== null &&
      filterFunctions.registeredInCritterPedia(
        activeFilters.isRegisteredOnCritterPedia,
      ),

    activeFilters.isPresentOnCurrentMonth !== null &&
      filterFunctions.isPresentOnCurrentMonth('southern', 10),
  ].filter(
    (item): item is (critter: UserCritterPediaData) => boolean =>
      item !== false,
  )

  const showCritter: UserCritterPediaBugs[] = filter({
    critter: personalCritter,
    filters,
  })
  return (
    <div>
      Donated To Museum
      <Toggle
        onCurrentStateCallback={(selected) =>
          setActiveFilters({ ...activeFilters, isDonatedToMuseum: selected })
        }
      />
      Registered On CritterPedia
      <Toggle
        onCurrentStateCallback={(selected) =>
          setActiveFilters({
            ...activeFilters,
            isRegisteredOnCritterPedia: selected,
          })
        }
      />
      Present On Current Month
      <Toggle
        onCurrentStateCallback={(selected) =>
          setActiveFilters({
            ...activeFilters,
            isPresentOnCurrentMonth: selected,
          })
        }
      />
      {showCritter.length}
      <CritterTable data={personalCritter} />
      {showCritter.map((bug) => (
        <CritterCard
          critter={bug}
          hemisphere={'southern'}
          locale={'en-US'}
          key={bug.id}
          updateCritterCallback={(updatedBug) => {
            setPersonalCritter(updateCritter(updatedBug, personalCritter))
          }}
        />
      ))}
    </div>
  )
}
export default Bugs
