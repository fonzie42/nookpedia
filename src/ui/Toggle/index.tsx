import React, { VFC } from 'react'

type ToggleProps = {
  currentState?: boolean | null
  onCurrentStateCallback: (selected: boolean | null) => void
}

export const Toggle: VFC<ToggleProps> = ({
  currentState,
  onCurrentStateCallback,
}) => {
  return (
    <div>
      <button onClick={() => onCurrentStateCallback(true)}>Yes</button>
      <button onClick={() => onCurrentStateCallback(false)}>No</button>
      <button onClick={() => onCurrentStateCallback(null)}>Clear</button>
    </div>
  )
}
