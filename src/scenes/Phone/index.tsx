import React, { useState, VFC } from 'react'
import { CritterPediaIcon } from 'components/NookIcons/CritterPediaIcon'
import './phone.scss'

const GRID_COLUMNS = 3

const newArray = (size: number): JSX.Element[] => new Array(size).fill(null)

export const Phone: VFC = () => {
  const [areButtonsLeaving, setAreButtonsLeaving] = useState<boolean>(false)
  const nookIconsRaw = [0, 0, 0, 0, 0, 0, 0, 0]
  const [currentOpenIcon, setCurrentOpenIcon] = useState<number | null>(null)

  const closeButton: () => void = () => {
    setAreButtonsLeaving(true)
    setTimeout(() => {
      setAreButtonsLeaving(false)
      setCurrentOpenIcon(null)
    }, 2500)
  }

  const a = (
    <>
      <CritterPediaIcon
        animation={areButtonsLeaving ? 'leaving' : 'reveal'}
        soloIcon="critter"
        onClick={closeButton}
      />

      <CritterPediaIcon
        animation={areButtonsLeaving ? 'leaving' : 'reveal'}
        soloIcon="fish"
        onClick={closeButton}
      />

      <CritterPediaIcon
        animation={areButtonsLeaving ? 'leaving' : 'reveal'}
        soloIcon="sea-creature"
        onClick={closeButton}
      />
    </>
  )

  const nookIcons = [...nookIconsRaw, ...newArray(nookIconsRaw.length % 3)].map(
    (item, i) => {
      return (
        <>
          {item !== null ? (
            <CritterPediaIcon
              onClick={() => {
                if (areButtonsLeaving) {
                  return
                }
                if (currentOpenIcon === null) {
                  setCurrentOpenIcon(i)
                }

                if (currentOpenIcon === i) {
                  closeButton()
                  return
                }
              }}
            />
          ) : (
            <span />
          )}
          {currentOpenIcon !== null &&
            (i + 1) % 3 === 0 &&
            currentOpenIcon <= i &&
            Math.abs(currentOpenIcon - i) <= GRID_COLUMNS - 1 &&
            a}
        </>
      )
    },
  )

  return <div className="phone">{nookIcons}</div>
}
