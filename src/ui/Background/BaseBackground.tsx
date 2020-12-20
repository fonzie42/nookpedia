import React, { FC } from 'react'
import './background.scss'
import cc from 'classcat'

type props = {
  animatedClassName: string
  fallbackClassName: string
}

export const BaseBackground: FC<props> = ({
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
