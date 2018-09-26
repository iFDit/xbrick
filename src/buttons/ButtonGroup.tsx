import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, ButtonSize } from 'src/common/props'

export interface IButtonGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * change Button size. The optional values are
   * `large`, `small` or `middle`.
   * @default middle
   */
  size?: ButtonSize

  /**
   * Button group layout (vertical or horizontal).
   * @default false
   */
  vertical?: boolean
}

export const ButtonGroup: React.StatelessComponent<IButtonGroupProps> = function (props: IButtonGroupProps) {
  const { tag, size, vertical, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={buttonGroupClass({size, vertical, className})} />
}

ButtonGroup.displayName = 'xbrick.ButtonGroup'
ButtonGroup.defaultProps = {
  tag: 'div',
  size: 'middle',
  vertical: false,
}

export type ButtonGroupClass = {
  size?: ButtonSize,
  vertical?: boolean,
  className?: string,
}

export function buttonGroupClass({size, vertical, className}: ButtonGroupClass = {}) {
  const sizeMap = { large: 'lg', small: 'sm' }
  const groupclass = vertical ?
    `${cls.BUTTON}-${cls.GROUP}-${cls.VERTICAL}`
    : `${cls.BUTTON}-${cls.GROUP}`
  return classNames(
    className,
    groupclass,
    {
      [`${cls.BUTTON}-${cls.GROUP}-${sizeMap[size!]}`]: !!sizeMap[size!],
    },
  )
}
