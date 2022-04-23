import { FC } from 'react'
import './CritterPediaIcon.scss'

import critterIcon from 'assets/nookIcons/critter.png'
import fishIcon from 'assets/nookIcons/fish.png'
import seaCreatureIcon from 'assets/nookIcons/sea_creature.png'
import cc from 'classcat'

import { BackgroundPolka, BackgroundRipple } from 'ui/Background'
import { bem } from 'utils/bem'

import { CritterPediaIconProps, IconOptions } from './types'

const createIconClassName = (
  selectedIcon: IconOptions,
  isSolo: boolean,
): string =>
  cc([
    `critter-icon__${selectedIcon}`,
    isSolo && `critter-icon__${selectedIcon}--center`,
  ])

const getIconImage = (selectedIcon: IconOptions): string => {
  const icons = {
    critter: critterIcon,
    fish: fishIcon,
    'sea-creature': seaCreatureIcon,
  }
  return icons[selectedIcon]
}

export const createIcon: FC<{ icon: IconOptions; isSolo: boolean }> = ({
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

export const createIcons: FC<{ soloIcon?: IconOptions }> = ({ soloIcon }) =>
  !!soloIcon ? (
    createIcon({ icon: soloIcon, isSolo: true })
  ) : (
    <>
      {createIcon({ icon: 'critter', isSolo: false })}
      {createIcon({ icon: 'fish', isSolo: false })}
      {createIcon({ icon: 'sea-creature', isSolo: false })}
    </>
  )

export const CritterPediaIcon: FC<CritterPediaIconProps> = ({
  onClick,
  animation,
  selectedIcon,
}) => {
  const isSolo = !!selectedIcon

  const block = 'critter-icon'
  const modifier = 'center'
  const animationModifier = animation

  const buttonClassName = cc([
    'critter-icon',
    animation && bem({ block, modifier: animationModifier }),
  ])

  const critterClassName = bem({
    block,
    element: 'critter',
    modifier: isSolo && modifier,
  })

  const fishClassName = bem({
    block,
    element: 'fish',
    modifier: isSolo && modifier,
  })

  const seaCreatureClassName = bem({
    block,
    element: 'sea-creature',
    modifier: isSolo && modifier,
  })

  const shouldRenderCritter = !isSolo || selectedIcon === 'critter'
  const shouldRenderFish = !isSolo || selectedIcon === 'fish'
  const shouldRenderSeaCreature = !isSolo || selectedIcon === 'sea-creature'

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
      <div className="critter-icon__background-wrapper">
        {isSolo ? <BackgroundPolka /> : <BackgroundRipple />}
      </div>
    </button>
  )
}
