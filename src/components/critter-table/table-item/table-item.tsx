import { UserCritterPediaData } from 'types/critterpedia'

import { Container, ItemButton, ItenImage } from './table-item.styled'
import { ItemProps } from './types'

function TableItem<T extends UserCritterPediaData>({
  critter,
}: ItemProps<T>): JSX.Element {
  return (
    <Container>
      <ItemButton>
        <ItenImage
          src={process.env.PUBLIC_URL + `/assets/icons${critter.filePath}.png`}
          alt={critter.name['en-US']}
        />
      </ItemButton>
    </Container>
  )
}

export default TableItem
