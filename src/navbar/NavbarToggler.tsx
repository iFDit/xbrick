import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
// import { Button } from 'src/buttons/Button'
import { NAVBAR_TOGGLER, NAVBAR_TOGGLER_ICON } from 'src/common/classes'

export interface INavbarTogglerProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>
}

export const NavbarToggler: React.StatelessComponent<INavbarTogglerProps> = function (props: INavbarTogglerProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={navbarTogglerClass({className})}>
      <span className={NAVBAR_TOGGLER_ICON} />
    </Tag>
  )
}

NavbarToggler.displayName = 'xbrick.NavbarToggler'
NavbarToggler.defaultProps = { tag: 'button' }

export function navbarTogglerClass({className}: {className?: string} = {}) {
  return classNames(className, NAVBAR_TOGGLER)
}
