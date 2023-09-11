import { FC } from 'react'

import { Background, Slider, Wrapper } from './close-app.styled'
import { ICloseAppProps } from './types'

export const CloseApp: FC<ICloseAppProps> = () => {
  return (
    <Wrapper>
      <Slider>
        <Background />
      </Slider>
    </Wrapper>
  )
}
