import { VFC, useState } from 'react'

import Bugs from 'scenes/Bugs'
import Fish from 'scenes/Fish'

import { APPS } from './APPS'
import './phone.scss'

export const Phone: VFC = () => {
  const [areButtonsLeaving, setAreButtonsLeaving] = useState<boolean>(false)

  const [currentOpenIcon, setCurrentOpenIcon] = useState<any | null>(null)

  const [isCritterOpen, setIsCritterOpen] = useState<boolean>(false)
  const [isFishOpen, setIsFishOpen] = useState<boolean>(false)

  const closeButton: () => void = () => {
    setAreButtonsLeaving(true)
    setTimeout(() => {
      setAreButtonsLeaving(false)
      setCurrentOpenIcon(null)
    }, 1500)
  }

  const critterPediaButtonsClassName = areButtonsLeaving
    ? 'phone__extra-icons phone__extra-icons--leaving'
    : 'phone__extra-icons phone__extra-icons--reveal'

  const nookIcons = APPS.map((items, i) => {
    const icon = items.map((item, j) => {
      const isCurrentOpen = currentOpenIcon === item
      const wrapperClassName =
        isCurrentOpen && !areButtonsLeaving
          ? 'phone__icon-wrapper phone__icon-wrapper--active'
          : 'phone__icon-wrapper'

      const onclickCallback = () => {
        if (areButtonsLeaving) {
          return
        }
        if (currentOpenIcon === null) {
          setCurrentOpenIcon(item)
          return
        }
        if (isCurrentOpen) {
          closeButton()
          return
        }
      }

      return (
        <div key={i + j} className={wrapperClassName}>
          {item.renderIcon(onclickCallback)}
        </div>
      )
    })

    return (
      <div className="phone__row" key={i}>
        {icon}
        {currentOpenIcon && (
          <div className={critterPediaButtonsClassName}>
            {currentOpenIcon?.renderSubIcons({
              critterCallback: () => {
                closeButton()
                setIsCritterOpen(!isCritterOpen)
              },

              fishCallback: () => {
                closeButton()
                setIsFishOpen(!isFishOpen)
              },
              seaCreatureCallback: closeButton,
            })}
          </div>
        )}
      </div>
    )
  })

  return (
    <div className="phone">
      <div className="phone__grid">{nookIcons}</div>
      {isCritterOpen && <Bugs />}
      {isFishOpen && <Fish />}
    </div>
  )
}
