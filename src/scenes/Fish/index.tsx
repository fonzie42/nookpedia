import { useEffect, useState } from 'react'

import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import CRITTERPEDIA_FISH from 'data/critterpedia/fish'
import { getFishFromLocalStorage, persistFishInLocalStorage } from 'storage'

import { CritterCard } from 'components/CritterCard'
import { CritterTable } from 'components/CritterTable'
import { UseFilters } from 'hooks/useFilters'
import { Hemisphere } from 'types/critterpedia'
import { CritterpediaFish, UserCritterPediaFish } from 'types/critterpedia/fish'
import { Toggle } from 'ui/Toggle'

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
export default Fish
