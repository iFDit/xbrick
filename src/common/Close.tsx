import React from 'react'
import { IProps } from 'src/common/props'

export interface ICloseProps extends IProps {}

export const Close: React.StatelessComponent<ICloseProps> = function (props: ICloseProps) {
  return (
    <button {...props} aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

Close.displayName = 'xbrick.Close'