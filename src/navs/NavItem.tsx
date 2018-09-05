import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { NAV_ITEM } from 'src/common/classes'

export interface INavItem extends IProps {
  /**
   * custom render component.
   * @default li
   */
  tag?: string | React.Factory<any>
}

export const NavItem: React.StatelessComponent<INavItem> = function (props: INavItem) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, NAV_ITEM)
  return <Tag {...others} className={className} />
}

export const NavItemStyles = {
  item: NAV_ITEM,
}

NavItem.displayName = 'xbrick.NavItem'
NavItem.defaultProps = { tag: 'li' }
