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

import { FilterContainer } from './styled'

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
    activeFilters,
    setFilter: {
      setIsDonatedToMuseumFilter,
      setIsPresentOnCurrentMonthFilter,
      setIsRegisteredOnCritterPediaFilter,
    },
  } = UseFilters({ data: personalCritter })

  return (
    <div>
      <FilterContainer>
        {/* Donated To Museum */}
        <ThreeWayToggle
          label={'🦉'}
          currentState={activeFilters.isDonatedToMuseum}
          onCurrentStateCallback={setIsDonatedToMuseumFilter}
        />
        {/* Registered On CritterPedia */}
        <ThreeWayToggle
          label={'📔'}
          currentState={activeFilters.isRegisteredOnCritterPedia}
          onCurrentStateCallback={setIsRegisteredOnCritterPediaFilter}
        />
        {/* Present On Current Month */}
        <ThreeWayToggle
          label={'🗓️'}
          currentState={activeFilters.isPresentOnCurrentMonth}
          onCurrentStateCallback={setIsPresentOnCurrentMonthFilter}
        />
      </FilterContainer>
      {/* {filteredData.length} @todo: remove, this is for debug reasons. Or add it in some other other place */}
      <CritterTable data={personalCritter} />
      {false && // temporary
        filteredData.map((bug) => (
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
