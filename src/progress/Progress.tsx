import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { PROGRESS } from 'src/common/classes'

export interface IProgressProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Progress: React.StatelessComponent<IProgressProps> = function (props: IProgressProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={progressClass({className})}/>
}

Progress.displayName = 'xbrick.Progress'
Progress.defaultProps = { tag: 'div' }

export function progressClass({className}: any) {
  return classNames(className, PROGRESS)
}
