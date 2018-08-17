import React from 'react'
import classNames from 'classnames'
import { PROGRESS } from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IProgressProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Progress: React.StatelessComponent<IProgressProps> = function (props: IProgressProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, PROGRESS)
  return <Tag {...others} className={className}/>
}

Progress.displayName = 'xbrick.Progress'
Progress.defaultProps = {
  tag: 'div',
}
