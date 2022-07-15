import { FLAGS } from 'data/flags'

import { CritterPediaIcon } from 'components/nook-icons'

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
        isOpeningApp,
      }: {
        critterCallback: () => void
        fishCallback: () => void
        seaCreatureCallback: () => void
        isOpeningApp?: boolean
      }) => {
        return (
          <>
            {FLAGS.ENABLE_CRITTER.critter && (
              <CritterPediaIcon
                isOpeningApp={isOpeningApp}
                selectedIcon={'critter'}
                onClick={critterCallback}
              />
            )}

            {FLAGS.ENABLE_CRITTER.fish && (
              <CritterPediaIcon
                isOpeningApp={isOpeningApp}
                selectedIcon={'fish'}
                onClick={fishCallback}
              />
            )}

            {FLAGS.ENABLE_CRITTER.seaCreature && (
              <CritterPediaIcon
                isOpeningApp={isOpeningApp}
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
