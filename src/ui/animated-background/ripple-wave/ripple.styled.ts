import styled, { css } from 'styled-components'

import { ripple1, ripple2 } from 'styles/Animations'

import { AnimatedBackground } from '../base.styled'

const sharedStyles = css`
  border-radius: 100%;
  width: 125%;
  height: 125%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Container = styled.div`
  background: #f6cd64;
  width: 100%;
  height: 100%;
`

export const AnimatedContainer = styled(AnimatedBackground)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background: #f6cd64;
  width: 100%;
  height: 100%;
`
export const RippleOne = styled.div`
  ${sharedStyles}

  background: #fcba14;
  animation: ${ripple1} 4s infinite forwards
    cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const RippleTwo = styled.div`
  ${sharedStyles}

  background: #f6cd64;
  animation: ${ripple2} 4s infinite forwards
    cubic-bezier(0.445, 0.05, 0.55, 0.95);
`
