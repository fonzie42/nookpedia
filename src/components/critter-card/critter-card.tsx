import { monthIntToString } from 'parser'

import { UserCritterPediaData } from 'types/critterpedia'
import { RarityBar } from 'ui/rarity-bar'
import { TwoStateToggle } from 'ui/two-way-toggle'

import {
  Card,
  CardTitle,
  CardTitleContent,
  CritterImage,
  Icon,
  InfoList,
  ListItemCatchPhrase,
  ListItemRarityBar,
  Mask,
  MuseumPhrase,
} from './critter-card.styled'
import { CritterCardProps } from './types'

const CritterCard = <T extends UserCritterPediaData>({
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
    <Card>
      <CritterImage
        src={`src/assets/images${critter.filePath}.png`}
        alt={critter.name[locale]}
      />
      <CardTitle>
        <CardTitleContent>
          <Icon>
            <Mask id={critter.filePath} fill="#fff">
              <rect id="b" width="100%" height="100%" />
              <circle id="c" r="9" fill="#000" />
              <use xlinkHref="#c" x="100%" />
              <use xlinkHref="#c" y="100%" />
              <use xlinkHref="#c" x="100%" y="100%" />
            </Mask>
            <use xlinkHref="#b" mask={`url(#${critter.filePath})`} />
          </Icon>
          {critter.name[locale]}
        </CardTitleContent>
      </CardTitle>
      <MuseumPhrase>"{critter.museumPhrase}"</MuseumPhrase>

      <InfoList>
        <ListItemCatchPhrase>
          <span>Catch Phrase: </span>
          <span>{critter.catchPhrase}</span>
        </ListItemCatchPhrase>
        <ListItemRarityBar>
          <span>Rarity </span>
          <RarityBar currentValue={critter.availability.rarity} />
        </ListItemRarityBar>
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
      </InfoList>
    </Card>
  )
}

export default CritterCard
