import React, { VFC } from 'react'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { Item } from './Item'
import './CritterTable.css'

type Props = {
  data: UserCritterPediaBugs[]
}

export const CritterTable: VFC<Props> = ({ data }) => (
  <div className="critter-table">
    {data.map((item) => (
      <Item critter={item} key={item.id} />
    ))}
  </div>
)
