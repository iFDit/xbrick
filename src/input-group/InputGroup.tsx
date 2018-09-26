import React from 'react'
import classNames from 'classnames'
import { INPUT_GROUP } from 'src/common/classes'
import { IProps, InputSize } from 'src/common/props'

export interface IInputGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set input component size.
   */
  size?: InputSize
}

export const InputGroup: React.StatelessComponent<IInputGroupProps> = function (props: IInputGroupProps) {
  const { tag, size, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={inputGroupClass({className, size})} />
}

InputGroup.displayName = 'xbrick.InputGroup'
InputGroup.defaultProps = {
  tag: 'div',
  size: 'middle',
}

export function inputGroupClass({className, size}: any) {
  const sizeMap = { large: 'lg', small: 'sm' }
  return classNames(
    className,
    INPUT_GROUP,
    {
      [`${INPUT_GROUP}-${sizeMap[size!]}`]: !!sizeMap[size!],
    },
  )
}
