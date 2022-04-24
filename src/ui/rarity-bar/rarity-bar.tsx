import { RARITIES } from 'types/critterpedia'

import { Container, Value } from './rarity-bar.styled'
import { RarityProps } from './types'

const RarityBar = ({ currentValue }: RarityProps) => (
  <Container>
    {RARITIES.map((rarity) => {
      return (
        <Value selected={rarity === currentValue} key={rarity}>
          {rarity}
        </Value>
      )
    })}
  </Container>
)

export default RarityBar
