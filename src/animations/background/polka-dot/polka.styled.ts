import styled from 'styled-components'

import { randomPolka } from 'styles/Animations'

import { AnimatedBackground } from '../base.styled'

export const Container = styled.div`
  position: relative;
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

  background-image: radial-gradient(#caa64a 20%, transparent 20%),
    radial-gradient(#f5d992 20%, transparent 20%);
  background-color: #fcba14;
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  animation: ${randomPolka} 8s infinite;
`
