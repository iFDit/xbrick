import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, Direction } from 'src/common/props'

export interface IDropdownProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set the dropdown menu direction variations, the options is
   * 'up', 'left', 'right'.
   */
  direction?: Direction
}

export const Dropdown: React.StatelessComponent<IDropdownProps> = function (props: IDropdownProps) {
  const { tag, direction = '', ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.DROPDOWN,
    classes.BUTTON_GROUP,
    { [classes[`DROP${direction.toUpperCase()}`]]: !!direction },
  )
  return <Tag {...others} className={className} />
}

Dropdown.displayName = 'xbrick.Dropdown'
Dropdown.defaultProps = {
  tag: 'div',
}
