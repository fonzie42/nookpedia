import React, { VFC } from 'react'
import './CritterPediaIcon.scss'

import critterIcon from 'assets/nookIcons/critter.png'
import fishIcon from 'assets/nookIcons/fish.png'
import seaCreatureIcon from 'assets/nookIcons/sea_creature.png'
import { BackgroundPolka, BackgroundRipple } from 'ui/Background'

import cc from 'classcat'

type props = {
  onClick: () => void
  animation?: 'reveal' | 'leaving'
  revealAnimation?: boolean
  soloIcon?: 'fish' | 'sea-creature' | 'critter'
}

export const CritterPediaIcon: VFC<props> = ({
  onClick,
  animation,
  soloIcon,
}) => {
  const isSolo = !!soloIcon

  const shouldRenderCritter = !isSolo || soloIcon === 'critter'
  const shouldRenderFish = !isSolo || soloIcon === 'fish'
  const shouldRenderSeaCreature = !isSolo || soloIcon === 'sea-creature'

  const buttonClassName = cc([
    'critter-icon',
    animation && `critter-icon--${animation}`,
  ])

  const critterClassName = cc([
    'critter-icon__critter',
    isSolo && 'critter-icon__critter--center',
  ])
  const fishClassName = cc([
    'critter-icon__fish',
    isSolo && 'critter-icon__fish--center',
  ])
  const seaCreatureClassName = cc([
    'critter-icon__sea-creature',
    isSolo && 'critter-icon__sea-creature--center',
  ])

  return (
    <button onClick={onClick} className={buttonClassName}>
      {shouldRenderCritter && (
        <img
          src={critterIcon}
          className={critterClassName}
          alt=""
          aria-hidden
        />
      )}
      {shouldRenderFish && (
        <img src={fishIcon} className={fishClassName} alt="" aria-hidden />
      )}
      {shouldRenderSeaCreature && (
        <img
          src={seaCreatureIcon}
          className={seaCreatureClassName}
          alt=""
          aria-hidden
        />
      )}
      {isSolo ? <BackgroundPolka /> : <BackgroundRipple />}
    </button>
  )
}
