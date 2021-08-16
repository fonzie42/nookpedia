import React from 'react'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'
import { Item } from './Item'
import './CritterTable.css'
import { UserCritterPediaData } from 'types/critterpedia'
import { CritterTableProps } from './types'

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
