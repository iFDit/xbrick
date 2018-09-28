import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { INPUT_GROUP_TEXT } from 'src/common/classes'

export interface IInputGroupTextProps extends IProps {
  /**
   * custom render component.
   * @default span
   */
  tag?: string | React.Factory<any>
}

export const InputGroupText: React.StatelessComponent<IInputGroupTextProps> = function (props: IInputGroupTextProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={inputGroupTextClass({className})} />
}

InputGroupText.displayName = 'xbrick.InputGroupText'
InputGroupText.defaultProps = { tag: 'span' }

export function inputGroupTextClass({className}: {className?: string} = {}) {
  return classNames(className, INPUT_GROUP_TEXT)
}
