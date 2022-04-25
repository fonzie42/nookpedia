import { FC } from 'react'

import {
  AnimatedContainer,
  Container,
  RippleOne,
  RippleTwo,
} from './ripple.styled'

export const RippleWave: FC = () => (
  <Container>
    <AnimatedContainer>
      <RippleOne />
      <RippleTwo />
    </AnimatedContainer>
  </Container>
)
