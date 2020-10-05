import React, { VFC } from 'react'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'

type Props = {
  critter: UserCritterPediaBugs
}

export const Item: VFC<Props> = ({ critter }) => (
  <div>
    <img src={critter.iconUri} alt={critter.name['en-US']} />
  </div>
)
