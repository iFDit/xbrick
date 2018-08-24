import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
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

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

export const InputGroup: React.StatelessComponent<IInputGroupProps> = function (props: IInputGroupProps) {
  const { tag, size, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.INPUT_GROUP,
    {
      [`${classes.INPUT_GROUP}-${sizeMap[size!]}`]: !!sizeMap[size!],
    },
  )
  return <Tag {...others} className={className} />
}

InputGroup.displayName = 'xbrick.InputGroup'
InputGroup.defaultProps = {
  tag: 'div',
  size: 'middle',
}
