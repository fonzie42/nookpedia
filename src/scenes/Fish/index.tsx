import React, { useEffect, useState } from 'react'

import CRITTERPEDIA_FISH from 'data/critterpedia/fish'
import { CritterCard } from 'components/CritterCard'
import { getFishFromLocalStorage, persistFishInLocalStorage } from 'storage'
import { mergeOrCreateDataWithCritter, updateCritterInList } from 'critterPedia'
import { CritterpediaFish, UserCritterPediaFish } from 'types/critterpedia/fish'
import { filter, filterFunctions } from 'data/filters'
import { Toggle } from 'components/Toggle'
import { CritterTable } from 'components/CritterTable'
import { UserCritterPediaData } from 'types/critterpedia'

type Filters = {
  isDonatedToMuseum?: boolean
  isRegisteredOnCritterPedia?: boolean
  isPresentOnCurrentMonth?: boolean
}

const Fish = () => {
  const [personalCritter, setPersonalCritter] = useState<
    UserCritterPediaFish[]
  >([])

  const [activeFilters, setActiveFilters] = useState<Filters>({
    isDonatedToMuseum: undefined,
    isRegisteredOnCritterPedia: undefined,
    isPresentOnCurrentMonth: undefined,
  })

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
    (item): item is (critter: UserCritterPediaData) => boolean => item !== false,
  )


  const showCritter: UserCritterPediaFish[] = filter({
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
export default Fish
