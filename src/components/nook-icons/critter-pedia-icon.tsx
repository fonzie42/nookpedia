import { FC } from 'react'

import critterIcon from 'assets/nookIcons/critter.png'
import fishIcon from 'assets/nookIcons/fish.png'
import seaCreatureIcon from 'assets/nookIcons/sea_creature.png'

import { BackgroundPolka, BackgroundRipple } from 'ui/animated-background'
import { OpenAppAnimation } from 'ui/open-app-animation'

import {
  CritterImage,
  CritterPediaButton,
  FishImage,
  SeaCreatureImage,
  Wrapper,
} from './critter-pedia-icon.styled'
import { CritterPediaIconProps } from './types'

const CritterPediaIcon: FC<CritterPediaIconProps> = ({
  animation,
  onClick,
  selectedIcon,
  isOpeningApp,
}) => {
  const isSolo = !!selectedIcon

  const shouldRenderCritter = !isSolo || selectedIcon === 'critter'
  const shouldRenderFish = !isSolo || selectedIcon === 'fish'
  const shouldRenderSeaCreature = !isSolo || selectedIcon === 'sea-creature'

  return (
    <Wrapper>
      <OpenAppAnimation isOpen={isOpeningApp} />
      <CritterPediaButton onClick={onClick} animation={animation}>
        {shouldRenderCritter && (
          <CritterImage
            centeredImage={isSolo}
            src={critterIcon}
            alt=""
            aria-hidden
          />
        )}
        {shouldRenderFish && (
          <FishImage centeredImage={isSolo} src={fishIcon} alt="" aria-hidden />
        )}
        {shouldRenderSeaCreature && (
          <SeaCreatureImage
            src={seaCreatureIcon}
            centeredImage={isSolo}
            alt=""
            aria-hidden
          />
        )}

        {isSolo ? <BackgroundPolka /> : <BackgroundRipple />}
      </CritterPediaButton>
    </Wrapper>
  )
}

export default CritterPediaIcon
