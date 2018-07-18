import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, ListGroupItemType } from 'src/common/props'

export interface IListGroupItemProps extends IProps {
  /**
   * custom render component.
   * @default ul
   */
  tag?: string | React.Factory<any>

  /**
   * set item bootstrap type.
   */
  bstype?: ListGroupItemType

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
  const { tag, disabled, active, action, bstype = '', ...other } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.LIST_GROUP_ITEM,
    {
      [classes.DISABLED]: !!disabled,
      [classes.ACTIVE]: !!active,
      [classes.LIST_GROUP_ITEM_ACTION]: !!action,
      [`${classes.LIST_GROUP_ITEM}-${classes[bstype!.toUpperCase()]}`]: !!bstype,
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
