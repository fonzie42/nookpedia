import styled, { css } from 'styled-components'

export const ToggleButton = styled.button<{ $isSelected: boolean }>`
  ${(props) =>
    props.$isSelected &&
    css`
      background: green;
    `}
`
