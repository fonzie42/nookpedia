import { FC } from 'react'

import { Background, Slider, Wrapper } from './close-app-animation.styled'
import { ICloseAppAnimationProps } from './types'

const CloseAppAnimation: FC<ICloseAppAnimationProps> = () => {
  return (
    <Wrapper>
      <Slider>
        <Background />
      </Slider>
    </Wrapper>
  )
}

export default CloseAppAnimation
