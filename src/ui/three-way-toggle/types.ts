export interface ToggleProps {
  label: string
  currentState: boolean | null
  onCurrentStateCallback: (selected: boolean | null) => void
}
