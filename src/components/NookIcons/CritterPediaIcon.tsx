import React, { VFC } from 'react'
import './CritterPediaIcon.scss'

import critterIcon from 'assets/nookIcons/critter.png'
import fishIcon from 'assets/nookIcons/fish.png'
import seaCreatureIcon from 'assets/nookIcons/sea_creature.png'
import { BackgroundPolka, BackgroundRipple } from 'ui/Background'

import cc from 'classcat'

type iconOptions = 'fish' | 'sea-creature' | 'critter'

type props = {
  onClick: () => void
  animation?: 'reveal' | 'leaving'
  revealAnimation?: boolean
  selectedIcon?: iconOptions
}

const createIconClassName = (
  selectedIcon: iconOptions,
  isSolo: boolean,
): string =>
  cc([
    `critter-icon__${selectedIcon}`,
    isSolo && `critter-icon__${selectedIcon}--center`,
  ])

const getIconImage = (selectedIcon: iconOptions): string => {
  const icons = {
    critter: critterIcon,
    fish: fishIcon,
    'sea-creature': seaCreatureIcon,
  }
  return icons[selectedIcon]
}

const createIcon: VFC<{ icon: iconOptions; isSolo: boolean }> = ({
  icon,
  isSolo,
}) => (
  <img
    src={getIconImage(icon)}
    className={createIconClassName(icon, isSolo)}
    alt=""
    aria-hidden
  />
)

const createIcons: VFC<{ soloIcon?: iconOptions }> = ({ soloIcon }) =>
  !!soloIcon ? (
    createIcon({ icon: soloIcon, isSolo: true })
  ) : (
    <>
      {createIcon({ icon: 'critter', isSolo: false })}
      {createIcon({ icon: 'fish', isSolo: false })}
      {createIcon({ icon: 'sea-creature', isSolo: false })}
    </>
  )

export const CritterPediaIcon: VFC<props> = ({
  onClick,
  animation,
  selectedIcon,
}) => {
  const isSolo = !!selectedIcon

  const buttonClassName = cc([
    'critter-icon',
    animation && `critter-icon--${animation}`,
  ])

  return (
    <button onClick={onClick} className={buttonClassName}>
      {createIcons({ soloIcon: selectedIcon })}
      {isSolo ? <BackgroundPolka /> : <BackgroundRipple />}
    </button>
  )
}
