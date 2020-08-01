import React, { FC } from 'react'
import './bug-card.css'
import { UserCritterPediaBugs } from 'types/critterpedia/bug'
import { Hemisphere, LocalizationAvailable } from 'types/critterpedia'
import { monthIntToString } from 'parser'

interface BugCardProps {
  bug: UserCritterPediaBugs
  hemisphere: Hemisphere
  locale: LocalizationAvailable
  updateCritterCallback: (updatedCritter: UserCritterPediaBugs) => void
}

export const BugCard: FC<BugCardProps> = ({
  bug,
  hemisphere,
  locale,
  updateCritterCallback,
}) => {
  const monthStart = monthIntToString({
    language: 'en-US',
    month: bug.availability.southern[0],
  })
  const monthEnd = monthIntToString({
    language: 'en-US',
    month: bug.availability.southern.slice(-1)[0],
  })
  return (
    <div className="bug-card">
      <h2>{bug.name[locale]}</h2>
      <img src={bug.imageUri} alt={bug.name[locale]} />
      <ul>
        <li>
          <span>Southern </span>
          {`${monthStart} - ${monthEnd}`}
        </li>
        <li>
          <span>Northern </span>
          <span>{bug.availability.northern.join(' ,')}</span>
        </li>
        <li>
          <span>Time Availability </span>
          <span>{bug.availability.timeArray.join(' ,')}</span>
        </li>
        <li>
          <span>Location </span>
          <span>{bug.availability.location}</span>
        </li>
        <li>
          <span>Rarity </span>
          <span>{bug.availability.rarity}</span>
        </li>
        <li>
          <span>Price </span>
          <span>{bug.price}</span>
        </li>
        <li>
          <span>Price Extra </span>
          <span>{bug.priceExtra}</span>
        </li>
        <li>
          <span>Catch Phrase </span>
          <span>{bug.catchPhrase}</span>
        </li>
        <li>
          <span>Museum Phrase </span>
          <span>{bug.museumPhrase}</span>
        </li>
        <li>
          <span>Registered On CritterPedia </span>
          <input
            type="checkbox"
            checked={bug.isRegisteredOnCritterPedia}
            onChange={(e) => {
              updateCritterCallback({
                ...bug,
                isRegisteredOnCritterPedia: e.target.checked,
              })
            }}
          />
        </li>
        <li>
          <span>Donated To Museum </span>
          <input
            type="checkbox"
            checked={bug.isDonatedToMuseum}
            onChange={(e) => {
              updateCritterCallback({
                ...bug,
                isDonatedToMuseum: e.target.checked,
              })
            }}
          />
        </li>
      </ul>
    </div>
  )
}
