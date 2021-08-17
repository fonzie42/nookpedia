import { VFC } from 'react'

import { BaseBackground } from '../BaseBackground'
import './ripple.scss'

export const Ripple: VFC = () => (
  <BaseBackground animatedClassName="ripple" fallbackClassName="ripple">
    <div className="ripple__background ripple__background--1" />
    <div className="ripple__background ripple__background--2" />
  </BaseBackground>
)
