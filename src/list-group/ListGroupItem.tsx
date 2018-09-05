import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, ListGroupItemType } from 'src/common/props'
import { ACTIVE, DISABLED, LIST_GROUP_ITEM, LIST_GROUP_ITEM_ACTION } from 'src/common/classes'

export interface IListGroupItemProps extends IProps {
  /**
   * custom render component.
   * @default ul
   */
  tag?: string | React.Factory<any>

  /**
   * set item bootstrap type.
   */
  color?: ListGroupItemType

  /**
   * set list item disabeld.
   * @default false
   */
  disabled?: boolean

  /**
   * set list item active.
   * @default false
   */
  active?: boolean

  /**
   * set list item have hover action.
   * @default false
   */
  action?: boolean
}

export const ListGroupItem: React.StatelessComponent<IListGroupItemProps> = function (props: IListGroupItemProps) {
  const { tag, disabled, active, action, color = '', ...other } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    LIST_GROUP_ITEM,
    {
      [DISABLED]: !!disabled,
      [ACTIVE]: !!active,
      [LIST_GROUP_ITEM_ACTION]: !!action,
      [`${LIST_GROUP_ITEM}-${cls[color!.toUpperCase()]}`]: !!color,
    },
  )
  return <Tag {...other} className={className} />
}

ListGroupItem.displayName = 'xbrick.ListGroupItem'
ListGroupItem.defaultProps = {
  tag: 'li',
  disabled: false,
  active: false,
  action: false,
}
