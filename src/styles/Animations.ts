import { keyframes } from 'styled-components'

export const wingsFlapping = keyframes`
  0% {
    transform: rotate(-15deg) scaleX(100%);
  }

  8% {
    transform: rotate(-15deg) scaleX(90%);
  }

  16% {
    transform: rotate(-15deg) scaleX(100%) translateY(2%);
  }

  24% {
    transform: rotate(-15deg) scaleX(90%) translateY(2%);
  }

  32% {
    transform: rotate(-15deg) scaleX(100%) translateY(4%);
  }

  40% {
    transform: rotate(-15deg) scaleX(90%) translateY(4%);
  }

  48% {
    transform: rotate(-15deg) scaleX(100%) translateY(6%);
  }

  56% {
    transform: rotate(-15deg) scaleX(90%) translateY(6%);
  }

  64% {
    transform: rotate(-15deg) scaleX(100%) translateY(6%);
  }

  80% {
    transform: rotate(-15deg) scaleX(90%) translateY(2%);
  }

  100% {
    transform: rotate(-15deg) scaleX(100%);
  }
`

export const fishBouncing = keyframes`
  50% {
    transform-origin: right bottom;
    transform: translateY(15%) rotate(-12deg);
  }

  100% {
    transform-origin: right bottom;
    transform: translateY(0) rotateY(0deg);
  }
`

export const seaCreatureSwimming = keyframes`
  0% {
    transform: rotate(15deg) scaleY(100%);
  }

  16% {
    transform: rotate(15deg) scaleY(90%) translateY(3%);
  }

  32% {
    transform: rotate(15deg) scaleY(100%) translateY(6%);
  }

  48% {
    transform: rotate(15deg) scaleY(90%) translateY(10%);
  }

  64% {
    transform: rotate(15deg) scaleY(100%) translateY(6%);
  }

  80% {
    transform: rotate(15deg) scaleY(90%) translateY(3%);
  }

  100% {
    transform: rotate(15deg) scaleY(100%);
  }
`

export const randomPolka = keyframes`
  0% {
    background-position: 0 0, 25px 25px;
  }
  50% {
    background-position: 150px 150px, 100px 100px;
  }
  100% {
    background-position: 0 0, 25px 25px;
  }
`

export const randomPolkaBig = keyframes`
  0% {
    background-position: 0 0, 25px 25px;
  }
  50% {
    background-position: 150px 150px, 100px 100px;
  }
  100% {
    background-position: 0 0, 25px 25px;
  }
`

export const ripple1 = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.1);
    z-index: 2;
  }

  50% {
    transform: translate(-50%, -50%) scale(1);
    z-index: 2;
  }

  95% {
    transform: translate(-50%, -50%) scale(1);
    z-index: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(0.1);
    z-index: 2;
  }
`

export const ripple2 = keyframes`
  0% {
    z-index: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  49.99% {
    transform: translate(-50%, -50%) scale(1);
    z-index: 1;
  }

  50% {
    transform: translate(-50%, -50%) scale(0.1);
    z-index: 2;
  }

  99.99% {
    transform: translate(-50%, -50%) scale(1);
    z-index: 2;
  }

  100% {
    z-index: 1;
  }
`

export const critterIconReveal = keyframes`
  0% {
    transform: translateY(-100%);
    z-index: -1;
  }

  100% {
    transform: translateY(0);
    z-index: -1;
  }
`

export const critterIconLeaving = keyframes`
  0% {
    transform: translateY(0);
    z-index: -1;
  }

  100% {
    transform: translateY(-100%);
    z-index: -1;
  }
`

export const critterIconWrapperReveal = keyframes`
  0% {
    transform: translateY(calc(-100% - 25px));
    z-index: -1;
  }

  99% {
    z-index: -1;
  }

  100% {
    transform: translateY(0);
    z-index: 1;
  }
`

export const critterIconWrapperLeaving = keyframes`
  0% {
    transform: translateY(0);
    z-index: -1;
  }

  100% {
    transform: translateY(calc(-100% - 25px));
    z-index: -1;
  }
`
