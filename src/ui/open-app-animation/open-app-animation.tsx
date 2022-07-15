import { FC } from 'react'

import { Wrapper } from './open-app-animation.styled'
import { IOpenAppAnimationProps } from './types'

const OpenAppAnimation: FC<IOpenAppAnimationProps> = ({ isOpen }) => {
  return <Wrapper $isOpen={isOpen} />
}

export default OpenAppAnimation
