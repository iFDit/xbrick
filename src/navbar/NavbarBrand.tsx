import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.NAVBAR_BRAND)
  return <Tag {...others} className={className} />
}

NavbarBrand.displayName = 'xbrick.NavbarBrand'
NavbarBrand.defaultProps = {
  tag: 'a',
}
