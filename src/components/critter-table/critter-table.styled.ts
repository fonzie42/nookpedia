import styled from 'styled-components'

export const Container = styled.div`
  --scrollbarBG: #f7f3da;
  --thumbBG: #bdaf73;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-flow: column;
  background: #f5ebc6;
  border: 1px solid #dbd3a4;
  overflow-x: scroll;
  overflow-y: auto;
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
