import './critter-card.scss'
import { monthIntToString } from 'parser'

import { UserCritterPediaData } from 'types/critterpedia'
import { RarityBar } from 'ui/RarityBar'
import { TwoStateToggle } from 'ui/TwoStateToggle'

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
    <div className="critter-card">
      <img
        className="critter-card__image"
        src={process.env.PUBLIC_URL + `/assets/images${critter.filePath}.png`}
        alt={critter.name[locale]}
      />
      <h2 className="critter-card__title">
        <div className="critter-card__title-container">
          <svg>
            <mask className="m" id={critter.filePath} fill="#fff">
              <rect id="b" width="100%" height="100%" />
              <circle id="c" r="9" fill="#000" />
              <use xlinkHref="#c" x="100%" />
              <use xlinkHref="#c" y="100%" />
              <use xlinkHref="#c" x="100%" y="100%" />
            </mask>
            <use xlinkHref="#b" mask={`url(#${critter.filePath})`} />
          </svg>
          {critter.name[locale]}
        </div>
      </h2>
      <span className="critter-card__museum-phrase">
        "{critter.museumPhrase}"
      </span>

      <ul>
        <li className="critter-card__catch-phrase">
          <span>Catch Phrase: </span>
          <span>{critter.catchPhrase}</span>
        </li>
        <li className="critter-card__rarity-bar">
          <span>Rarity </span>
          <RarityBar currentValue={critter.availability.rarity} />
        </li>
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
          <span>Price </span>
          <span>{critter.price} Bells</span>
        </li>
        <li>
          <span>Price Extra </span>
          <span>{critter.priceExtra} Bells</span>
        </li>
        <li>
          <span>Registered On CritterPedia </span>
          <TwoStateToggle
            isCheked={critter.isRegisteredOnCritterPedia}
            onChangeCallback={(e) => {
              updateCritterCallback({
                ...critter,
                isRegisteredOnCritterPedia: e.target.checked,
              })
            }}
          />
        </li>
        <li>
          <span>Donated To Museum </span>
          <TwoStateToggle
            isCheked={critter.isDonatedToMuseum}
            onChangeCallback={(e) => {
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
