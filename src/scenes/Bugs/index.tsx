import React, { useEffect, useState } from 'react'

import CRITTERPEDIA_BUGS from 'data/critterpedia/bugs'
import { CritterCard } from 'components/CritterCard'
import { getBugsFromLocalStorage, persistBugsInLocalStorage } from 'storage'
import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import { CritterpediaBugs, UserCritterPediaBugs } from 'types/critterpedia/bug'
import { filter, filterFunctions } from 'data/filters'
import { Toggle } from 'components/Toggle'
import { CritterTable } from 'components/CritterTable'

type Filters = {
  isDonatedToMuseum?: boolean
  isRegisteredOnCritterPedia?: boolean
  isPresentOnCurrentMonth?: boolean
}

const Bugs = () => {
  const [personalCritter, setPersonalCritter] = useState<
    UserCritterPediaBugs[]
  >([])

  const [activeFilters, setActiveFilters] = useState<Filters>({
    isDonatedToMuseum: undefined,
    isRegisteredOnCritterPedia: undefined,
    isPresentOnCurrentMonth: undefined,
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
    activeFilters.isDonatedToMuseum !== undefined &&
      filterFunctions.donatedToMusem(activeFilters.isDonatedToMuseum),

    activeFilters.isRegisteredOnCritterPedia !== undefined &&
      filterFunctions.registeredInCritterPedia(
        activeFilters.isRegisteredOnCritterPedia,
      ),

    activeFilters.isPresentOnCurrentMonth !== undefined &&
      filterFunctions.isPresentOnCurrentMonth('southern', 10),
  ].filter(
    (item): item is (bug: UserCritterPediaBugs) => boolean => item !== false,
  )

  const showCritter = filter({
    bugs: personalCritter,
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
