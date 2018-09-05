import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { NAVBAR_BRAND } from 'src/common/classes'

export interface INavbarBrandProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const NavbarBrand: React.StatelessComponent<INavbarBrandProps> = function (props: INavbarBrandProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, NAVBAR_BRAND)
  return <Tag {...others} className={className} />
}

NavbarBrand.displayName = 'xbrick.NavbarBrand'
NavbarBrand.defaultProps = { tag: 'a' }
