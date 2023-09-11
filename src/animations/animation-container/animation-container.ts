import { basePhoneSize, phoneBorderRadius } from 'scenes/Phone/phone.styled'
import styled from 'styled-components'

export const AnimationContainer = styled.div`
  ${basePhoneSize}
  ${phoneBorderRadius}

  pointer-events: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: none;
`
