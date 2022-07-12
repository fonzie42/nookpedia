import styled from 'styled-components'

export const Container = styled.div`
  grid-template-rows: repeat(5, 65px); // @todo this should have a media query
  grid-template-columns: repeat(
    16,
    65px
  ); // @todo this should have a media query

  --scrollbarBG: #f7f3da;
  --thumbBG: #bdaf73;
  display: grid;
  grid-auto-flow: column;
  background: #f5ebc6;
  border: 1px solid #dbd3a4;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  & > * {
    border: 1px solid #dbd3a4;
  }

  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }
`

export const CritterCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
`
