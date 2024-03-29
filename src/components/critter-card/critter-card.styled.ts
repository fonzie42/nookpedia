import styled from 'styled-components'

export const Card = styled.div`
  border: 2px solid #aca580;
  border-radius: 10px;
  margin: 16px;
  max-width: 650px;
  padding: 32px 16px;
  background-image: url(../../assets/images/paper_texture.jpg);
  background-size: cover;
`

export const CardTitle = styled.h2`
  padding: 0.75rem;
  width: 350px;
  background: #f7f3da;
  transform: rotate(-3.8deg);
  box-shadow: #c2ba95 0px 13px 8px -8px;
  color: #454430;
  margin: auto;
`

export const CardTitleContent = styled.div`
  z-index: 1;
  text-transform: capitalize;
  text-align: center;

  padding: 0.5rem;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -7px;
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 2px solid #b2afa0;
  }
`

export const Icon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  filter: drop-shadow(1px 1px 0px #b2afa0) drop-shadow(-1px 1px 0px #b2afa0)
    drop-shadow(1px -1px 0px #b2afa0) drop-shadow(-1px -1px 0px #b2afa0);
`

export const Mask = styled.mask`
  & + use {
    fill: rgb(247, 243, 218);
  }
`

export const CritterImage = styled.img`
  width: 100%;
  background: white;
  transform: rotate(2deg);
`

export const MuseumPhrase = styled.span`
  font-style: italic;
  margin-top: 3rem;
  display: block;
`

export const InfoList = styled.ul`
  margin: 0;
  padding: 0;

  & li {
    display: grid;
    grid-template-columns: 3fr 8fr;
    margin-bottom: 0.5rem;
  }
`

export const ListItemCatchPhrase = styled.li`
  margin: 1rem 0rem;
`

export const ListItemRarityBar = styled.li`
  margin-bottom: 1rem;
`
