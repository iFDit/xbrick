import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { cloneWithClassName } from 'src/common/util'
import { ACTIVE, DISABLED, NAV_LINK } from 'src/common/classes'

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
   * render or not render wrap node, helpful in react-router.
   * @default true
   */
  render?: boolean
}

export const NavLink: React.StatelessComponent<INavLinkProps> = function (props: INavLinkProps) {
  const { tag, active, render, disabled, className, ...others } = props
  const Tag = tag!
  const classes = navLinkClass({className, active, disabled})
  return render ? <Tag {...others} className={classes} /> : cloneWithClassName(props.children, classes)
}

export const NavLinkStyles = {
  link: NAV_LINK,
  active: ACTIVE,
  disabled: DISABLED,
}

NavLink.displayName = 'xbrick.NavLink'
NavLink.defaultProps = {
  tag: 'a',
  render: true,
  active: false,
  disabled: false,
}

export type NavLinkClass = {
  className?: string,
  active?: boolean,
  disabled?: boolean,
}

export function navLinkClass({className, active, disabled}: NavLinkClass = {}) {
  return classNames(
    className,
    NAV_LINK,
    {
      [ACTIVE]: !!active,
      [DISABLED]: !!disabled,
    },
  )
}
