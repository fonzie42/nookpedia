import { Checkbox, Container, Knobs, Layer } from './two-way-toggle.styled'
import { TwoStateToggleProps } from './types'

const TwoStateToggle = ({
  isCheked,
  onChangeCallback,
}: TwoStateToggleProps) => (
  <Container>
    <Checkbox type="checkbox" checked={isCheked} onChange={onChangeCallback} />
    <Knobs className="knobs">{isCheked ? 'Yes' : 'No'}</Knobs>
    <Layer className="layer" />
  </Container>
)

export default TwoStateToggle
