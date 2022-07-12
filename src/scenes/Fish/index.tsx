import { useEffect, useState } from 'react'

import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import CRITTERPEDIA_FISH from 'data/critterpedia/fish'
import { getFishFromLocalStorage, persistFishInLocalStorage } from 'storage'

import { CritterCard } from 'components/critter-card'
import { CritterTable } from 'components/critter-table'
import { UseFilters } from 'hooks/useFilters'
import { Hemisphere } from 'types/critterpedia'
import { CritterpediaFish, UserCritterPediaFish } from 'types/critterpedia/fish'
import { ThreeWayToggle } from 'ui/three-way-toggle'

const Fish = () => {
  const [personalCritter, setPersonalCritter] = useState<
    UserCritterPediaFish[]
  >([])

  useEffect(() => {
    const { fish } = CRITTERPEDIA_FISH
    const userData = getFishFromLocalStorage()
    const firstPersonalCritter = mergeOrCreateDataWithCritter<
      CritterpediaFish,
      UserCritterPediaFish
    >(userData, fish)
    setPersonalCritter(firstPersonalCritter)
  }, [])

  useEffect(() => {
    persistFishInLocalStorage(personalCritter)
  }, [personalCritter])

  const updateCritter = (
    updatedCritter: UserCritterPediaFish,
    critterList: UserCritterPediaFish[],
  ): UserCritterPediaFish[] =>
    updateCritterInList<UserCritterPediaFish>(updatedCritter, critterList)

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
      Donated To Museum
      <ThreeWayToggle
        label={'🦉'}
        currentState={activeFilters.isDonatedToMuseum}
        onCurrentStateCallback={setIsDonatedToMuseumFilter}
      />
      Registered On CritterPedia
      <ThreeWayToggle
        label={'📔'}
        currentState={activeFilters.isRegisteredOnCritterPedia}
        onCurrentStateCallback={setIsRegisteredOnCritterPediaFilter}
      />
      Present On Current Month
      <ThreeWayToggle
        label={'🗓️ '}
        currentState={activeFilters.isPresentOnCurrentMonth}
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
export default Fish
