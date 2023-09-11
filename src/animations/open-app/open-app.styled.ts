import styled, { css, keyframes } from 'styled-components'

const revealKeyframe = keyframes`
100%{
  transform: translate(-50%, -50%) scale(0);
  z-index: 0;
}
`

export const OverlayExpand = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background: #f6cd64;
  width: 100%;
  height: 100%;
  border-radius: 30px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transition: 0.75s ease-in;
      transform: scale(10);
      z-index: 10;
    `}
`

export const AppReveal = styled.div`
  transition: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(10);
  width: 500px;
  height: 500px;
  background: #f6cd64;
  z-index: 10;
  animation: ${revealKeyframe} 0.75s forwards ease-out;
`
