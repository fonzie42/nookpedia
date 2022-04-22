import { FLAGS } from 'data/flags'

import { CritterPediaIcon } from 'components/NookIcons/CritterPediaIcon'

export const APPS = [
  [
    {
      renderIcon: (onclickCallback: () => void) => (
        <CritterPediaIcon onClick={onclickCallback} />
      ),
      renderSubIcons: ({
        critterCallback,
        fishCallback,
        seaCreatureCallback,
      }: {
        critterCallback: () => void
        fishCallback: () => void
        seaCreatureCallback: () => void
      }) => {
        return (
          <>
            {FLAGS.ENABLE_CRITTER.critter && (
              <CritterPediaIcon
                selectedIcon={'critter'}
                onClick={critterCallback}
              />
            )}

            {FLAGS.ENABLE_CRITTER.fish && (
              <CritterPediaIcon selectedIcon={'fish'} onClick={fishCallback} />
            )}

            {FLAGS.ENABLE_CRITTER.seaCreature && (
              <CritterPediaIcon
                selectedIcon={'sea-creature'}
                onClick={seaCreatureCallback}
              />
            )}
          </>
        )
      },
    },
  ],
]
