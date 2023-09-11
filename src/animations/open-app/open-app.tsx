import { FC } from 'react'

import { OverlayExpand, AppReveal } from './open-app.styled'
import { IOpenAppProps } from './types'
import { AnimationContainer } from 'animations/animation-container'

export const OpenAppOverlay: FC<IOpenAppProps> = ({ isOpen }) => {
  return <OverlayExpand $isOpen={isOpen} />
}

export const OpenAppReveal: FC = () => {
  return (
    <AnimationContainer>
      <AppReveal />
    </AnimationContainer>
  )
}
