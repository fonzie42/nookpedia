import { VFC } from 'react'

import { Background } from '../Background'
import './polka.scss'

export const Polka: VFC = () => (
  <Background
    animatedClassName="polka polka--animated"
    fallbackClassName="polka"
  />
)
