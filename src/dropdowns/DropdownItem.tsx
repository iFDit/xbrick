import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { ACTIVE, DISABLED, DROPDOWN_ITEM, DROPDOWN_HEADER, DROPDOWN_DIVIDER } from 'src/common/classes'

export interface IDropdownItemProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>

  /**
   * set dropdown item become menu header.
   * @default false
   */
  header?: boolean

  /**
   * set dropdown item become divider.
   * @default false
   */
  divider?: boolean

  /**
   * set dropdown item active.
   * @default false
   */
  active?: boolean

  /**
   * set dropdown item disabled.
   * @default false
   */
  disabled?: boolean
}

export const DropdownItem: React.StatelessComponent<IDropdownItemProps> = function (props: IDropdownItemProps) {
  const { tag, header, divider, active, disabled, className, ...others } = props
  const Tag = header ? 'h6' : divider ? 'div' : tag!
  return <Tag {...others} className={dropdownItemClass({className, header, divider, active, disabled})}/>
}

DropdownItem.displayName = 'xbrick.DropdownItem'
DropdownItem.defaultProps = {
  tag: 'a',
  header: false,
  divider: false,
  active: false,
  disabled: false,
}

export type DropdownItemClass = {
  className?: string,
  header?: boolean,
  divider?: boolean,
  active?: boolean,
  disabled?: boolean,
}

export function dropdownItemClass({className, header, divider, active, disabled}: DropdownItemClass = {}) {
  return classNames(
    className,
    {
      [DROPDOWN_ITEM]: !header && !divider,
      [DROPDOWN_HEADER]: !!header,
      [DROPDOWN_DIVIDER]: !!divider,
      [DISABLED]: !!disabled,
      [ACTIVE]: !!active,
    },
  )
}
