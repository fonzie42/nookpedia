import { FC, useCallback, useState } from 'react'

import { useMachine } from '@xstate/react'
import Bugs from 'scenes/Bugs'
import Fish from 'scenes/Fish'

import { toggleMachine } from 'state/state'

import { APPS } from './APPS'
import {
  Container,
  Content,
  ExtraIcons,
  Footer,
  Header,
  IconWrapper,
  PhoneContainer,
  PhoneRow,
  SizeContainer,
} from './phone.styled'

export const Phone: FC = () => {
  const [current, send] = useMachine(toggleMachine)

  const [areButtonsLeaving, setAreButtonsLeaving] = useState<boolean>(false)

  const [currentOpenIcon, setCurrentOpenIcon] = useState<any | null>(null)

  const [isCritterOpen, setIsCritterOpen] = useState<boolean>(false)

  const setIsCritterOpenWithDelay = useCallback(
    (e: boolean) => setTimeout(() => setIsCritterOpen(e), 1500),
    [setIsCritterOpen],
  )
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
        current.value === 'subIconOpen' && send('CLOSE_SUB_ICON') // @todo: should call closebutton
        if (current.value === 'phoneIdle') {
          send('CLICK_ICON')
          setCurrentOpenIcon(item)
          return
        }
      }

      return (
        <IconWrapper key={i + j} active={isCurrentOpen && !areButtonsLeaving}>
          {item.renderIcon(onclickCallback)}
        </IconWrapper>
      )
    })

    false && closeButton()
    return (
      <PhoneRow key={i}>
        {icon}
        {current.value === 'subIconOpen' && currentOpenIcon && (
          <ExtraIcons animation={areButtonsLeaving ? 'leaving' : 'reveal'}>
            {currentOpenIcon?.renderSubIcons({
              critterCallback: () => {
                send('OPEN_APP')
                setIsCritterOpenWithDelay(!isCritterOpen)
              },

              fishCallback: () => {
                send('OPEN_APP')
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
    <SizeContainer>
      <Container>
        {current.value === 'appOpen' && (
          <>
            <Header onClick={() => send('CLOSE_APP')}>Header</Header>
            <Content>
              <Bugs />
            </Content>
            <Footer>Footer</Footer>
          </>
        )}

        {(current.value === 'phoneIdle' || current.value === 'subIconOpen') && (
          <PhoneContainer>{nookIcons}</PhoneContainer>
        )}

        {isFishOpen && <Fish />}
      </Container>
    </SizeContainer>
  )
}
