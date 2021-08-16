
export interface ToggleProps {
  currentState?: boolean | null
  onCurrentStateCallback: (selected: boolean | null) => void
}