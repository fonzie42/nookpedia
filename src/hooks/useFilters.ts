import { useState } from 'react'

import { filter, filterFunctions } from 'data/filters'

import { Hemisphere, UserCritterPediaData } from 'types/critterpedia'

import { Filters, UseFiltersProps } from './types'

export function UseFilters<T extends UserCritterPediaData>({
  data,
}: UseFiltersProps<T>) {
  const [activeFilters, setActiveFilters] = useState<Filters>({
    isDonatedToMuseum: null,
    isRegisteredOnCritterPedia: null,
    isPresentOnCurrentMonth: null,
  })

  const {
    isDonatedToMuseum,
    isRegisteredOnCritterPedia,
    isPresentOnCurrentMonth,
  } = activeFilters

  const filters = [
    isDonatedToMuseum !== null &&
      filterFunctions.donatedToMusem(isDonatedToMuseum),

    isRegisteredOnCritterPedia !== null &&
      filterFunctions.registeredInCritterPedia(isRegisteredOnCritterPedia),

    isPresentOnCurrentMonth !== null &&
      filterFunctions.isPresentOnCurrentMonth({
        hemisphere: Hemisphere.SOUTHERN,
        isPresent: isPresentOnCurrentMonth,
      }),
  ].filter(
    (item): item is (critter: UserCritterPediaData) => boolean =>
      item !== false,
  )

  const setIsDonatedToMuseumFilter = (newValue: boolean | null) =>
    setActiveFilters({ ...activeFilters, isDonatedToMuseum: newValue })
  const setIsRegisteredOnCritterPediaFilter = (newValue: boolean | null) =>
    setActiveFilters({ ...activeFilters, isRegisteredOnCritterPedia: newValue })
  const setIsPresentOnCurrentMonthFilter = (newValue: boolean | null) =>
    setActiveFilters({ ...activeFilters, isPresentOnCurrentMonth: newValue })

  const filteredData = filter({
    critter: data,
    filters,
  })

  return {
    filteredData,
    setFilter: {
      setIsDonatedToMuseumFilter,
      setIsRegisteredOnCritterPediaFilter,
      setIsPresentOnCurrentMonthFilter,
    },
  }
}
