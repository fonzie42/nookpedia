import styled, { css } from 'styled-components'

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
