import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
}

export const NavLink: React.StatelessComponent<INavLinkProps> = function (props: INavLinkProps) {
  const { tag, active, disabled, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.NAV_LINK,
    {
      [classes.ACTIVE]: !!active,
      [classes.DISABLED]: !!disabled,
    },
  )
  return <Tag {...others} className={className} />
}

NavLink.displayName = 'xbrick.NavLink'
NavLink.defaultProps = {
  tag: 'a',
  active: false,
  disabled: false,
}
