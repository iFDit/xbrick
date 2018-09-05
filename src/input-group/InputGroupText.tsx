import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { INPUT_GROUP_TEXT } from 'src/common/classes'

export interface IInputGroupTextProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const InputGroupText: React.StatelessComponent<IInputGroupTextProps> = function (props: IInputGroupTextProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, INPUT_GROUP_TEXT)
  return <Tag {...others} className={className} />
}

InputGroupText.displayName = 'xbrick.InputGroupText'
InputGroupText.defaultProps = { tag: 'div' }
