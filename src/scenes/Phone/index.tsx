import { FC, useState } from 'react'

import { useMachine } from '@xstate/react'
import { FLAGS } from 'data/flags'
import Bugs from 'scenes/Bugs'
import Fish from 'scenes/Fish'

import { CritterPediaIcon } from 'components/nook-icons'
import { toggleMachine } from 'state/state'

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
  const [current, send] = useMachine(toggleMachine, { devTools: true })

  const [currentOpenIcon, setCurrentOpenIcon] = useState<string | null>(null) // @todo: type this

  const [openSubIcon, setOpenSubIcon] = useState<-1 | 0 | 1 | 2>(-1)

  const isAppOpen = current.matches('appOpen')

  const isAppOpenAnimating =
    current.matches('appOpen.animatingIn') ||
    current.matches('appOpen.animatingOut')

  const shouldRenderIcons =
    current.matches('phoneIdle') ||
    current.matches('subIconOpen') ||
    current.matches('appOpen.animatingIn')

  const shouldRenderSubIcon =
    current.matches('subIconOpen') ||
    current.matches('appOpen.animatingIn') ||
    current.matches('appOpen.animatingOut')

  return (
    <SizeContainer>
      <Container>
        {isAppOpen && (
          <>
            {!isAppOpenAnimating && (
              <>
                <Header
                  onClick={() => {
                    send('CLOSE_APP')
                    setOpenSubIcon(-1)
                  }}
                >
                  Header
                </Header>
                <Content>
                  <Bugs />
                </Content>
                <Footer>Footer</Footer>
              </>
            )}
          </>
        )}

        {shouldRenderIcons && (
          <PhoneContainer>
            <PhoneRow>
              <IconWrapper active={currentOpenIcon === 'critter'}>
                <CritterPediaIcon
                  onClick={() => {
                    current.matches('subIconOpen') && send('CLOSE_SUB_ICON') // @todo: should call closebutton
                    if (current.value === 'phoneIdle') {
                      send('CLICK_ICON')
                      setCurrentOpenIcon('critter')
                      return
                    }
                  }}
                />
              </IconWrapper>
              {shouldRenderSubIcon && currentOpenIcon === 'critter' && (
                <ExtraIcons
                  animation={
                    current.matches('subIconOpen.animatingOut')
                      ? 'leaving'
                      : 'reveal' // @todo: improve this
                  }
                >
                  {FLAGS.ENABLE_CRITTER.critter && (
                    <CritterPediaIcon
                      isOpeningApp={openSubIcon === 0}
                      selectedIcon={'critter'}
                      onClick={() => {
                        send('OPEN_APP')
                        setOpenSubIcon(0)
                      }}
                    />
                  )}

                  {FLAGS.ENABLE_CRITTER.fish && (
                    <CritterPediaIcon
                      isOpeningApp={openSubIcon === 1}
                      selectedIcon={'fish'}
                      onClick={() => {
                        send('OPEN_APP')
                        setOpenSubIcon(1)
                      }}
                    />
                  )}

                  {FLAGS.ENABLE_CRITTER.seaCreature && (
                    <CritterPediaIcon
                      isOpeningApp={openSubIcon === 2}
                      selectedIcon={'sea-creature'}
                      onClick={() => {
                        send('OPEN_APP')
                        setOpenSubIcon(2)
                      }}
                    />
                  )}
                </ExtraIcons>
              )}
            </PhoneRow>
          </PhoneContainer>
        )}

        {
          false && (
            <Fish />
          ) /* @todo: Fix this and better handle different apps state */
        }
      </Container>
    </SizeContainer>
  )
}
