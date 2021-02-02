import { VFC } from 'react'

import { Background } from '../Background'
import './ripple.scss'

export const Ripple: VFC = () => (
  <Background animatedClassName="ripple" fallbackClassName="ripple">
    <div className="ripple__background ripple__background--1" />
    <div className="ripple__background ripple__background--2" />
  </Background>
)
