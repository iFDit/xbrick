import React from 'react'
import classNames from 'classnames'
import { IProps, InputGroupPosition } from 'src/common/props'
import { INPUT_GROUP_APPEND, INPUT_GROUP_PREPEND } from 'src/common/classes'

export interface IInputGroupAddonProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * addon at prepend(false) or append(true).
   * @default prepend
   */
  position?: InputGroupPosition
}

export const InputGroupAddon: React.StatelessComponent<IInputGroupAddonProps> = function (props: IInputGroupAddonProps) {
  const { tag, position, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={inputGroupAddonClass({className, position})} />
}

export const InputGroupAddonStyles = {
  prepend: INPUT_GROUP_PREPEND,
  append: INPUT_GROUP_APPEND,
}

InputGroupAddon.displayName = 'xbrick.InputGroupAddon'
InputGroupAddon.defaultProps = {
  tag: 'div',
  position: 'prepend',
}

export function inputGroupAddonClass({className, position}: any) {
  return classNames(className, {
    [INPUT_GROUP_PREPEND]: position === 'prepend',
    [INPUT_GROUP_APPEND]: position === 'append',
  })
}
