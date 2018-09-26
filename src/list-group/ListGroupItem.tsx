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
  dynamic?: boolean
}

export const ListGroupItem: React.StatelessComponent<IListGroupItemProps> = function (props: IListGroupItemProps) {
  const { tag, disabled, active, dynamic, color, className, ...other } = props
  const Tag = tag!
  return <Tag {...other} className={listGroupItemClass({className, disabled, active, dynamic, color})} />
}

ListGroupItem.displayName = 'xbrick.ListGroupItem'
ListGroupItem.defaultProps = {
  tag: 'li',
  disabled: false,
  active: false,
  dynamic: false,
}

export function listGroupItemClass({className, disabled, active, dynamic, color}: any) {
  return classNames(
    className,
    LIST_GROUP_ITEM,
    {
      [DISABLED]: !!disabled,
      [ACTIVE]: !!active,
      [LIST_GROUP_ITEM_ACTION]: !!dynamic,
      [`${LIST_GROUP_ITEM}-${cls[color!.toUpperCase()]}`]: !!color,
    },
  )
}
