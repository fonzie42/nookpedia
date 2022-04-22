import { FC } from 'react'

import './background.scss'
import cc from 'classcat'

import { bem } from 'utils/bem'

import { BackgroundProps } from './types'

const block = 'background'

export const Background: FC<BackgroundProps> = ({
  children,
  animatedClassName,
  fallbackClassName,
}) => (
  <>
    <div
      className={cc([fallbackClassName, bem({ block, modifier: 'fallback' })])}
      aria-hidden
    />

    <div
      className={cc([animatedClassName, bem({ block, modifier: 'animated' })])}
    >
      {children}
    </div>
  </>
)
