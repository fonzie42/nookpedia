import styled, { css } from 'styled-components'

import {
  critterIconLeaving,
  critterIconReveal,
  fishBouncing,
  seaCreatureSwimming,
  wingsFlapping,
} from 'styles/Animations'
import { AnimatedBackground } from 'ui/animated-background/base.styled'

const revealAnimation = css`
  animation: ${critterIconReveal} 2s;
`
const leavingAnimation = css`
  animation: ${critterIconLeaving} 2s forwards;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`

export const CritterImage = styled.img<{
  centeredImage?: boolean
}>`
  z-index: 1;
  position: absolute;
  width: 46%;
  top: 11%;
  left: 7%;
  transform: rotate(-15deg) scaleX(100%);

  ${(props) =>
    props.centeredImage &&
    css`
      scale: 1.5;
      top: 26%;
      left: 26%;
    `}
`

export const FishImage = styled.img<{
  centeredImage?: boolean
}>`
  z-index: 1;
  position: absolute;
  width: 52%;
  bottom: 14%;
  left: 27%;

  ${(props) =>
    props.centeredImage &&
    css`
      width: 75%;
      bottom: 29%;
      left: 12%;
    `}
`

export const SeaCreatureImage = styled.img<{
  centeredImage?: boolean
}>`
  z-index: 1;
  position: absolute;
  transform: rotate(15deg) scaleX(100%);
  width: 35%;
  top: 7%;
  right: 9%;

  ${(props) =>
    props.centeredImage &&
    css`
      scale: 1.5;
      top: 25%;
      right: 32%;
    `}
`

export const CritterPediaButton = styled.button<{
  animation?: 'reveal' | 'leaving'
}>`
  position: relative;
  border-radius: 25%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.animation &&
    (props.animation === 'reveal' ? revealAnimation : leavingAnimation)}

  &:hover {
    transform: scale(1.15);
  }

  &:focus ${AnimatedBackground}, &:hover ${AnimatedBackground} {
    display: block;
  }

  &:focus > ${CritterImage}, &:hover > ${CritterImage} {
    animation: ${wingsFlapping} 1.75s infinite;
  }

  &:focus > ${FishImage}, &:hover > ${FishImage} {
    animation: ${fishBouncing} 2s infinite;
  }

  &:focus > ${SeaCreatureImage}, &:hover > ${SeaCreatureImage} {
    animation: ${seaCreatureSwimming} 1.5s infinite;
  }
`
