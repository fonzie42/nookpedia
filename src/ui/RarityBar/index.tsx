import { RARITIES, Rarity } from 'types/critterpedia'
import './rarity.scss'

export const RarityBar = ({ currentValue }: { currentValue: Rarity }) => (
  <div className="rarity-bar">
    {RARITIES.map((rarity) => {
      const rarityBarValueClassName =
        rarity === currentValue
          ? 'rarity-bar__value rarity-bar__value--selected'
          : 'rarity-bar__value'
      return (
        <div className={rarityBarValueClassName} key={rarity}>
          {rarity}
        </div>
      )
    })}
  </div>
)
