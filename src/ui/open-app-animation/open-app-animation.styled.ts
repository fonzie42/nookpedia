import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  position: ;
  background: #f6cd64;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transition: 2s;
      transform: scale(10);
      z-index: 2;
    `}
`
