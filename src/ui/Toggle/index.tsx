import { FC } from 'react'

import { ToggleProps } from './types'

export const Toggle: FC<ToggleProps> = ({ onCurrentStateCallback }) => {
  return (
    <div>
      <button onClick={() => onCurrentStateCallback(true)}>Yes</button>
      <button onClick={() => onCurrentStateCallback(false)}>No</button>
      <button onClick={() => onCurrentStateCallback(null)}>Clear</button>
    </div>
  )
}
