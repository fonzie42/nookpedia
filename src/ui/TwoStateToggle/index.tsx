import React from 'react'
import './two-state-toggle.scss'

interface TwoStateToggleProps {
  isCheked: boolean
  onChangeCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TwoStateToggle = ({
  isCheked,
  onChangeCallback,
}: TwoStateToggleProps) => (
  <div className="two-state-toggle">
    <input
      type="checkbox"
      className="checkbox"
      checked={isCheked}
      onChange={onChangeCallback}
    />
    <div className="knobs">{isCheked ? 'Yes' : 'No'}</div>
    <div className="layer" />
  </div>
)
