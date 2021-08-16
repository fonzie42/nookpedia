import { UserCritterPediaData } from 'types/critterpedia'
import { ItemProps } from './types'

export function Item<T extends UserCritterPediaData>({
  critter,
}: ItemProps<T>): JSX.Element {
  return (
    <div>
      <img src={critter.iconUri} alt={critter.name['en-US']} />
    </div>
  )
}
