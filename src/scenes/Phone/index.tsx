import { FC, useState } from 'react'

import Bugs from 'scenes/Bugs'
import Fish from 'scenes/Fish'

import { APPS } from './APPS'
import {
  Container,
  ExtraIcons,
  IconWrapper,
  PhoneContainer,
  PhoneRow,
} from './phone.styled'

export const Phone: FC = () => {
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

  const nookIcons = APPS.map((items, i) => {
    const icon = items.map((item, j) => {
      const isCurrentOpen = currentOpenIcon === item

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
        <IconWrapper key={i + j} active={isCurrentOpen && !areButtonsLeaving}>
          {item.renderIcon(onclickCallback)}
        </IconWrapper>
      )
    })

    return (
      <PhoneRow key={i}>
        {icon}
        {currentOpenIcon && (
          <ExtraIcons animation={areButtonsLeaving ? 'leaving' : 'reveal'}>
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
          </ExtraIcons>
        )}
      </PhoneRow>
    )
  })

  return (
    <Container>
      <PhoneContainer>{nookIcons}</PhoneContainer>
      {isCritterOpen && <Bugs />}
      {isFishOpen && <Fish />}
    </Container>
  )
}
