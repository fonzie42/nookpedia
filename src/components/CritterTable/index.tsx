import React from 'react'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { UserCritterPediaFish } from 'types/critterpedia/fish'
import { Item } from './Item'
import './CritterTable.css'
import { UserCritterPediaData } from 'types/critterpedia'

type Props<T extends UserCritterPediaData> = {
  data: T[]
}

export function CritterTable<T extends UserCritterPediaData>({
  data,
}: Props<T>): JSX.Element {
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
