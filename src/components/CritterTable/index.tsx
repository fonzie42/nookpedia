import { UserCritterPediaData } from 'types/critterpedia'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'

import { Item } from './Item'
import { CritterTableProps } from './types'

import './CritterTable.css'

export function CritterTable<T extends UserCritterPediaData>({
  data,
}: CritterTableProps<T>): JSX.Element {
  return (
    <div className="critter-table">
      {(data as Array<UserCritterPediaBugs | UserCritterPediaFish>).map(
        (item) => (
          <Item critter={item} key={item.id} />
        ),
      )}
    </div>
  )
}
