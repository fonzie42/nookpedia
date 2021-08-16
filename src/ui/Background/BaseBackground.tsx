import React, { FC } from 'react'
import './background.scss'
import cc from 'classcat'
import { BaseBackgroundProps } from './types'


export const BaseBackground: FC<BaseBackgroundProps> = ({
  children,
  animatedClassName,
  fallbackClassName,
}) => (
  <>
    <div
      className={cc([
        fallbackClassName,
        'base-background base-background--fallback',
      ])}
      aria-hidden
    />

    <div
      className={cc([
        animatedClassName,
        'base-background base-background--animated',
      ])}
    >
      {children}
    </div>
  </>
)
