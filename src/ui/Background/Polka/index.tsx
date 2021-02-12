import { VFC } from 'react'

import { BACKGROUND } from 'types/animations'
import { bem } from 'utils/bem'

import { Background } from '../Background'
import './polka.scss'

export const Polka: VFC = () => {
  const block = BACKGROUND.POLKA

  return (
    <Background
      animatedClassName={bem({ block, modifier: 'animated' })}
      fallbackClassName={bem({ block })}
    />
  )
}
