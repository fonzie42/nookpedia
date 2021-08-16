import React, { useEffect, useState } from 'react'

import CRITTERPEDIA_BUGS from 'data/critterpedia/bugs'
import { CritterCard } from 'components/CritterCard'
import { getBugsFromLocalStorage, persistBugsInLocalStorage } from 'storage'
import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import { CritterpediaBugs, UserCritterPediaBugs } from 'types/critterpedia/bug'
import { Toggle } from 'ui/Toggle'
import { CritterTable } from 'components/CritterTable'
import { Hemisphere } from 'types/critterpedia'
import { UseFilters } from 'hooks/useFilters'

const Bugs = () => {
  const [personalCritter, setPersonalCritter] = useState<
    UserCritterPediaBugs[]
  >([])

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

  const {
    filteredData,
    setFilter: {
      setIsDonatedToMuseumFilter,
      setIsPresentOnCurrentMonthFilter,
      setIsRegisteredOnCritterPediaFilter,
    },
  } = UseFilters({ data: personalCritter })

  return (
    <div>
      Donated To Museum
      <Toggle onCurrentStateCallback={setIsDonatedToMuseumFilter} />
      Registered On CritterPedia
      <Toggle onCurrentStateCallback={setIsRegisteredOnCritterPediaFilter} />
      Present On Current Month
      <Toggle onCurrentStateCallback={setIsPresentOnCurrentMonthFilter} />
      {filteredData.length}
      <CritterTable data={personalCritter} />
      {filteredData.map((bug) => (
        <CritterCard
          critter={bug}
          hemisphere={Hemisphere.SOUTHERN}
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
