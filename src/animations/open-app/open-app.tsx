import { FC } from 'react'
import { IOpenAppProps } from './types'

export const OpenAppOverlay: FC<IOpenAppProps> = ({ isOpen }) => {
  return <OverlayExpand $isOpen={isOpen} />
}

