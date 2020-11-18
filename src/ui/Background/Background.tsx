import React, { FC } from 'react'
import './background.scss'
import cc from 'classcat'

type props = {
  animatedClassName: string
  fallbackClassName: string
}

export const Background: FC<props> = ({
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
