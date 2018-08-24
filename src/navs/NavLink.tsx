import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { cloneWithClassName } from 'src/common/util'

export interface INavLinkProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>

  /**
   * set navlink active.
   * @default false
   */
  active?: boolean

  /**
   * set navlink disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * not render wrap tag.
   * @default false
   */
  nowrap?: boolean
}

export const NavLink: React.StatelessComponent<INavLinkProps> = function (props: INavLinkProps) {
  const { tag, active, nowrap, disabled, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.NAV_LINK,
    {
      [classes.ACTIVE]: !!active,
      [classes.DISABLED]: !!disabled,
    },
  )
  return nowrap ? cloneWithClassName(props.children, className) : <Tag {...others} className={className} />
}

NavLink.displayName = 'xbrick.NavLink'
NavLink.defaultProps = {
  tag: 'a',
  nowrap: false,
  active: false,
  disabled: false,
}
