import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICloseProps extends IProps {}

export const Close: React.StatelessComponent<ICloseProps> = function (props: ICloseProps) {
  const className = classNames(props.className, classes.CLOSE)
  return (
    <button {...props} className={className} aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

Close.displayName = 'xbrick.Close'