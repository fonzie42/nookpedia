import { UserCritterPediaData } from 'types/critterpedia'

import { ItemProps } from './types'

import './item.scss'

export function Item<T extends UserCritterPediaData>({
  critter,
}: ItemProps<T>): JSX.Element {
  return (
    <div className="critter-card-item">
      <button className="critter-card-item__button">
        <img
          className="critter-card-item__image"
          src={process.env.PUBLIC_URL + `/assets/icons${critter.filePath}.png`}
          alt={critter.name['en-US']}
        />
      </button>
    </div>
  )
}
