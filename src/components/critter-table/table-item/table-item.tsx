import { UserCritterPediaData } from 'types/critterpedia'

import { Container, ItemButton, ItemImage } from './table-item.styled'
import { ItemProps } from './types'

function TableItem<T extends UserCritterPediaData>({
  critter,
  openCritterCallback,
}: ItemProps<T>): JSX.Element {
  return (
    <Container>
      <ItemButton onClick={openCritterCallback}>
        <ItemImage
          src={`src/assets/icons${critter.filePath}.png`}
          alt={critter.name['en-US']}
        />
      </ItemButton>
    </Container>
  )
}

export default TableItem
