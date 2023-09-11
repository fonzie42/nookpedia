import { FC } from 'react'

import { useMachine } from '@xstate/react'
import { FLAGS } from 'data/flags'
import Bugs from 'scenes/Bugs'
import Fish from 'scenes/Fish'

import { CritterPediaIcon } from 'components/nook-icons'
import { toggleMachine } from 'state/state'
import { CloseApp } from 'animations/close-app'

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
  Spacer,
} from './phone.styled'

export const Phone: FC = () => {
  const [current, send] = useMachine(toggleMachine, { devTools: true })

  const isAppOpen = current.matches('appOpen')

  const isAppOpenAnimating = current.matches('appOpen.animatingIn')

  const isAppAnimatingOut = current.matches('appOpen.animatingOut')

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
      <Container $isAppOpen={isAppOpen}>
        {isAppAnimatingOut && <CloseApp />}
        {isAppOpen && !isAppOpenAnimating && (
          <>
            <Header
              onClick={() => {
                send('CLOSE_APP')
              }}
            >
              Header
            </Header>
            <Content>
              {current.context.selectedApp === 'Critter' && <Bugs />}
              {current.context.selectedApp === 'Fish' && <Fish />}
            </Content>
            <Footer>Footer</Footer>
          </>
        )}

        {shouldRenderIcons && (
          <PhoneContainer>
            <PhoneRow>
              <IconWrapper
                active={current.context.selectedIcon === 'Critterpedia'}
              >
                <CritterPediaIcon
                  onClick={() => {
                    current.matches('subIconOpen') && send('CLOSE_SUB_ICON') // @todo: should call closebutton
                    if (current.value === 'phoneIdle') {
                      send('CLICK_ICON', { icon: 'Critterpedia' }) // @todo: is there a way to typecheck this?
                      return
                    }
                  }}
                />
              </IconWrapper>
              <Spacer
                $withShadow={shouldRenderSubIcon}
                $isAppOpen={isAppOpen}
              />
              {shouldRenderSubIcon &&
                current.context.selectedIcon === 'Critterpedia' && (
                  <ExtraIcons
                    animation={
                      current.matches('subIconOpen.animatingOut')
                        ? 'leaving'
                        : 'reveal' // @todo: improve this
                    }
                  >
                    {FLAGS.ENABLE_CRITTER.critter && (
                      <CritterPediaIcon
                        isOpeningApp={current.context.selectedApp === 'Critter'}
                        selectedIcon={'critter'}
                        onClick={() => {
                          send('OPEN_APP', { app: 'Critter' })
                        }}
                      />
                    )}

                    {FLAGS.ENABLE_CRITTER.fish && (
                      <CritterPediaIcon
                        isOpeningApp={current.context.selectedApp === 'Fish'}
                        selectedIcon={'fish'}
                        onClick={() => {
                          send('OPEN_APP', { app: 'Fish' })
                        }}
                      />
                    )}

                    {FLAGS.ENABLE_CRITTER.seaCreature && (
                      <CritterPediaIcon
                        isOpeningApp={
                          current.context.selectedApp === 'sea-creature'
                        }
                        selectedIcon={'sea-creature'}
                        onClick={() => {
                          send('OPEN_APP', { app: 'sea-creature' })
                        }}
                      />
                    )}
                  </ExtraIcons>
                )}
            </PhoneRow>
          </PhoneContainer>
        )}
      </Container>
    </SizeContainer>
  )
}
