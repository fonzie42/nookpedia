import { FC } from 'react'

import { ToggleButton } from './three-way.styled'
import { ToggleProps } from './types'

const ThreeWayToggle: FC<ToggleProps> = ({
  label,
  onCurrentStateCallback,
  currentState,
}) => {
  return (
    <div>
      <ToggleButton
        $isSelected={currentState === false}
        onClick={() => onCurrentStateCallback(false)}
      >
        ❌
      </ToggleButton>
      {
        label /* @todo: Temporary, this should be replaced once a better ux is achieved, and a proper asset is used  */
      }
      <ToggleButton
        $isSelected={currentState === true}
        onClick={() => onCurrentStateCallback(true)}
      >
        ✔️
      </ToggleButton>
      {currentState !== null && (
        <ToggleButton
          $isSelected={currentState === null}
          onClick={() => onCurrentStateCallback(null)}
        >
          🗑️
        </ToggleButton>
      )}
    </div>
  )
}

export default ThreeWayToggle
