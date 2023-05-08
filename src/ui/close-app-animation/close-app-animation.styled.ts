import styled, { keyframes } from 'styled-components'

const slide = keyframes`{
  0% { 
    transform: translateX(-100%) 
  }
  50%{ 
    transform: translateX(0);
  }
  75%{ 
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}`

const barberpole = keyframes`{
  from { background-position: 0 0; }
  to   { background-position: 240px 120px; }
}`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 120px;
  overflow: hidden;
  z-index: 10;
`

export const Slider = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  animation: ${slide} 2s ease-in-out;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: 120px 120px;
  background-image: linear-gradient(
    45deg,
    #fcba14 25%,
    #f6cd64 25%,
    #f6cd64 50%,
    #fcba14 50%,
    #fcba14 75%,
    #f6cd64 75%,
    #f6cd64
  );
  animation: ${barberpole} 0.6s linear infinite;
`
