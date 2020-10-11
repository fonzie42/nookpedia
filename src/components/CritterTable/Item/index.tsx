import React from 'react'
import { UserCritterPediaData } from 'types/critterpedia'

type Props<T extends UserCritterPediaData> = {
  critter: T
}

export function Item<T extends UserCritterPediaData>({
  critter,
}: Props<T>): JSX.Element {
  return (
    <div>
      <img src={critter.iconUri} alt={critter.name['en-US']} />
    </div>
  )
}
