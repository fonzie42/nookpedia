import { useState } from 'react'

import { CritterCard } from 'components/critter-card'
import { Hemisphere, UserCritterPediaData } from 'types/critterpedia'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'

import { Container, CritterCardContainer } from './critter-table.styled'
import { TableItem } from './table-item'
import { CritterTableProps } from './types'

function CritterTable<T extends UserCritterPediaData>({
  data,
}: CritterTableProps<T>): JSX.Element {
  const [openCritter, setOpenCritter] = useState<
    UserCritterPediaBugs | UserCritterPediaFish | null // @todo: fix this type, T | null didn't work
  >(null)
  return (
    <Container>
      {(data as Array<UserCritterPediaBugs | UserCritterPediaFish>).map(
        (item) => (
          <TableItem
            critter={item}
            key={item.id}
            openCritterCallback={() => {
              setOpenCritter(item)
            }}
          />
        ),
      )}
      {openCritter && (
        <CritterCardContainer>
          <CritterCard
            critter={openCritter}
            hemisphere={Hemisphere.SOUTHERN}
            locale={'en-US'}
            key={openCritter.id}
            updateCritterCallback={(updatedBug) => {
              // setPersonalCritter(updateCritter(updatedBug, personalCritter))
            }}
          />
        </CritterCardContainer>
      )}
    </Container>
  )
}

export default CritterTable
