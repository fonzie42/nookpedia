import { FC } from 'react'

import './background.scss'
import cc from 'classcat'

import { BackgroundProps } from './types'

export const Background: FC<BackgroundProps> = ({
  children,
  animatedClassName,
  fallbackClassName,
}) => (
  <>
    <div
      className={cc([fallbackClassName, 'background background--fallback'])}
      aria-hidden
    />

    <div className={cc(['background background--animated', animatedClassName])}>
      {children}
    </div>
  </>
)
