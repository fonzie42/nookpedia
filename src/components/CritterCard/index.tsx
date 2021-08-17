import './critter-card.css'
import { monthIntToString } from 'parser'

import { UserCritterPediaData } from 'types/critterpedia'

import { CritterCardProps } from './types'

export const CritterCard = <T extends UserCritterPediaData>({
  critter,
  locale,
  updateCritterCallback,
}: CritterCardProps<T>): JSX.Element => {
  const monthStart = monthIntToString({
    language: 'en-US',
    month: critter.availability.southern[0],
  })
  const monthEnd = monthIntToString({
    language: 'en-US',
    month: critter.availability.southern.slice(-1)[0],
  })
  return (
    <div className="bug-card">
      <h2>{critter.name[locale]}</h2>
      <img src={critter.imageUri} alt={critter.name[locale]} />
      <ul>
        <li>
          <span>Southern </span>
          {`${monthStart} - ${monthEnd}`}
        </li>
        <li>
          <span>Northern </span>
          <span>{critter.availability.northern.join(' ,')}</span>
        </li>
        <li>
          <span>Time Availability </span>
          <span>{critter.availability.timeArray.join(' ,')}</span>
        </li>
        <li>
          <span>Location </span>
          <span>{critter.availability.location}</span>
        </li>
        <li>
          <span>Rarity </span>
          <span>{critter.availability.rarity}</span>
        </li>
        <li>
          <span>Price </span>
          <span>{critter.price}</span>
        </li>
        <li>
          <span>Price Extra </span>
          <span>{critter.priceExtra}</span>
        </li>
        <li>
          <span>Catch Phrase </span>
          <span>{critter.catchPhrase}</span>
        </li>
        <li>
          <span>Museum Phrase </span>
          <span>{critter.museumPhrase}</span>
        </li>
        <li>
          <span>Registered On CritterPedia </span>
          <input
            type="checkbox"
            checked={critter.isRegisteredOnCritterPedia}
            onChange={(e) => {
              updateCritterCallback({
                ...critter,
                isRegisteredOnCritterPedia: e.target.checked,
              })
            }}
          />
        </li>
        <li>
          <span>Donated To Museum </span>
          <input
            type="checkbox"
            checked={critter.isDonatedToMuseum}
            onChange={(e) => {
              updateCritterCallback({
                ...critter,
                isDonatedToMuseum: e.target.checked,
              })
            }}
          />
        </li>
      </ul>
    </div>
  )
}
