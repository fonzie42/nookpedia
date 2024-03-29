import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Value = styled.div<{ selected?: boolean }>`
  padding: 0.25rem 0.5rem;
  background: #fbf5ec;
  border: 1px solid #787369;
  border-right: none;
  color: #9f9a91;
  text-decoration: line-through;
  user-select: none;

  &:last-child {
    border-right: 1px solid #787369;
  }

  ${(props) =>
    props.selected &&
    css`
      background: #fff0a6;
      opacity: 1;
      position: relative;
      color: #422c20;
      text-decoration: none;
      user-select: text;

      &:before,
      &:after {
        content: '';
        z-index: 1;
        border-width: 2px;
        border-style: solid;
        border-color: red;
        position: absolute;
        width: 125%;
        opacity: 0.7;
        border-radius: 50%;
        padding: 0.1em 0.25em;
        pointer-events: none;
        height: 2em;
      }

      &:before {
        left: -0.75em;
        top: -0.25em;
        border-right-color: transparent;
        transform: rotate(2deg);
      }

      &:after {
        left: -0.95em;
        top: 0em;
        border-top-color: transparent;
        transform: rotate(-6deg);
      }
    `}
`
