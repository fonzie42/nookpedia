import React, { VFC } from 'react'
import { BaseBackground } from '../BaseBackground'
import './polka.scss'

export const Polka: VFC = () => (
  <BaseBackground
    animatedClassName="polka polka--animated"
    fallbackClassName="polka"
  />
)
