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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={narbarBrandClass({className})} />
}

NavbarBrand.displayName = 'xbrick.NavbarBrand'
NavbarBrand.defaultProps = { tag: 'a' }

export function narbarBrandClass({className}: any) {
  return classNames(className, NAVBAR_BRAND)
}
