import { FC } from 'react'

import { BACKGROUND } from 'types/animations'

import { Background } from '../Background'
import './ripple.scss'

export const Ripple: FC = () => (
  <Background animatedClassName="ripple" fallbackClassName="ripple">
    <div className={BACKGROUND.RIPPLE_1} />
    <div className={BACKGROUND.RIPPLE_2} />
  </Background>
)
