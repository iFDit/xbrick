import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.NAV_ITEM)
  return <Tag {...others} className={className} />
}

NavItem.displayName = 'xbrick.NavItem'
NavItem.defaultProps = {
  tag: 'li',
}
