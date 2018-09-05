import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { ACTIVE, DISABLED, DROPDOWN_ITEM, DROPDOWN_HEADER, DROPDOWN_DIVIDER } from 'src/common/classes'

export interface IDropdownItemProps extends IProps {
  /**
   * custom render component.
   * @default div
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
  // shortcut of ignore active and disabled props.
  // @ts-ignore
  const { tag, header, divider, active, disabled, ...others } = props
  const Tag = header ? 'h6' : divider ? 'div' : tag!
  return <Tag {...others} className={getDropdownClassName(props)}/>
}

function getDropdownClassName(props: IDropdownItemProps) {
  const { header, divider, active, disabled } = props
  return classNames(
    props.className,
    {
      [DROPDOWN_ITEM]: !header && !divider,
      [DROPDOWN_HEADER]: !!header,
      [DROPDOWN_DIVIDER]: !!divider,
      [DISABLED]: !!disabled,
      [ACTIVE]: !!active,
    },
  )
}

DropdownItem.displayName = 'xbrick.DropdownItem'
DropdownItem.defaultProps = {
  tag: 'a',
  header: false,
  divider: false,
  active: false,
  disabled: false,
}
