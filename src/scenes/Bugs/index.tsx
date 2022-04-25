import { useEffect, useState } from 'react'

import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import CRITTERPEDIA_BUGS from 'data/critterpedia/bugs'
import { getBugsFromLocalStorage, persistBugsInLocalStorage } from 'storage'

import { CritterCard } from 'components/critter-card'
import { CritterTable } from 'components/critter-table'
import { UseFilters } from 'hooks/useFilters'
import { Hemisphere } from 'types/critterpedia'
import { CritterpediaBugs, UserCritterPediaBugs } from 'types/critterpedia/bug'
import { ThreeWayToggle } from 'ui/three-way-toggle'

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
      <ThreeWayToggle onCurrentStateCallback={setIsDonatedToMuseumFilter} />
      Registered On CritterPedia
      <ThreeWayToggle
        onCurrentStateCallback={setIsRegisteredOnCritterPediaFilter}
      />
      Present On Current Month
      <ThreeWayToggle
        onCurrentStateCallback={setIsPresentOnCurrentMonthFilter}
      />
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
