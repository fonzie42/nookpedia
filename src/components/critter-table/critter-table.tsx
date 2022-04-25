import { UserCritterPediaData } from 'types/critterpedia'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'

import { Container } from './critter-table.styled'
import { TableItem } from './table-item'
import { CritterTableProps } from './types'

function CritterTable<T extends UserCritterPediaData>({
  data,
}: CritterTableProps<T>): JSX.Element {
  return (
    <Container>
      {(data as Array<UserCritterPediaBugs | UserCritterPediaFish>).map(
        (item) => (
          <TableItem critter={item} key={item.id} />
        ),
      )}
    </Container>
  )
}

export default CritterTable
