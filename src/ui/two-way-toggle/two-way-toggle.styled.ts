import styled, { css } from 'styled-components'

const sharedStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Container = styled.div`
  position: relative;
  width: 74px;
  height: 36px;
  overflow: hidden;
  border-radius: 100px;
`
export const Knobs = styled.div`
  ${sharedStyles}
  z-index: 2;
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #a1a1a1;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
`
export const Layer = styled.div`
  ${sharedStyles}
  width: 100%;
  background-color: #d3d3d3;
  transition: 0.3s ease all;
  z-index: 1;
`

export const Checkbox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:active + ${Knobs} {
    width: 46px;
    border-radius: 100px;
  }

  &:checked:active + ${Knobs} {
    margin-left: -26px;
  }

  &:checked + ${Knobs} {
    left: 42px;
    background-color: #03a9f4;
  }

  &:checked ~ ${Layer} {
    background-color: #ebf7fc;
  }
`
