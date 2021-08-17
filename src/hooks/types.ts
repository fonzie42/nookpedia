enum FiltersAvailable {
  isDonatedToMuseum = 'isDonatedToMuseum',
  isRegisteredOnCritterPedia = 'isRegisteredOnCritterPedia',
  isPresentOnCurrentMonth = 'isPresentOnCurrentMonth',
}

export type Filters = {
  [key in FiltersAvailable]: boolean | null
}

export interface UseFiltersProps<T> {
  data: T[]
}
