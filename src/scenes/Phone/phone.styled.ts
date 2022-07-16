import styled, { css, keyframes } from 'styled-components'

import {
  critterIconWrapperLeaving,
  critterIconWrapperReveal,
} from 'styles/Animations'

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const backgroundChange = keyframes`
0%{
  background: #f6f4e7;
}
99%{
  background: #f6cd64;
}
100%{
  background: #f6f4e7;
}

`

export const Container = styled.div<{ $isAppOpen?: boolean }>`
  background: #f6f4e7;
  border-radius: 120px;
  display: flow-root;
  overflow: hidden;
  height: 100%;
  transition: 1.5s;

  ${({ $isAppOpen }) =>
    $isAppOpen &&
    css`
      animation: 1.5s ${backgroundChange};
      & > * {
        animation: ${fadeIn} 1s ease-out;
      }
    `}
`

export const SizeContainer = styled.div`
  // @todo: this should be changed according to display size
  width: 360px;
  height: 720px;
  position: relative;
`

export const PhoneContainer = styled.div`
  margin: 100px 25px;
`

export const PhoneRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  z-index: 1;
  grid-gap: 25px;
  margin-bottom: 25px;
`

export const ExtraIcons = styled.div<{ animation: 'reveal' | 'leaving' }>`
  z-index: -1;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 0;
  top: 125px;

  animation: ${(props) =>
      props.animation === 'reveal'
        ? critterIconWrapperReveal
        : critterIconWrapperLeaving}
    1.5s forwards;
`

export const IconWrapper = styled.div<{ active?: boolean }>`
  transition: 1.5s;
  margin-bottom: ${(props) => (props.active ? '125px' : '0')};
`

export const Header = styled.button`
  height: 120px;
  background: red;
  padding: 0;
  margin: 0;
  width: 100%;
  border: none;
`

export const Footer = styled.div`
  height: 120px;
  background: red;
`

export const Content = styled.div`
  height: calc(100% - 240px);
`
