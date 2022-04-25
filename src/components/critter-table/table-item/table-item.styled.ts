import styled from 'styled-components'

export const Container = styled.div`
  transition: 0.15s;
`
export const ItemButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 6px;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 0px 3px #dbd3a4;
  }

  &:focus {
    background: red;
  }

  &:focus-visible {
    outline: none; // todo change it
  }

  &:active {
    background: green;
    transform: scale3d(0.9, 0.9, 1);
    box-shadow: inset 0px 0px 2px 2px black;
  }
`
export const ItenImage = styled.img`
  pointer-events: none;
`
