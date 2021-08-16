
export type IconOptions = 'fish' | 'sea-creature' | 'critter'

export interface CritterPediaIconProps {
  onClick: () => void
  animation?: 'reveal' | 'leaving'
  revealAnimation?: boolean
  selectedIcon?: IconOptions
}

