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
  const className = classNames(props.className, NAVBAR_TOGGLER)
  return (
    <button {...props} className={className}>
      <span className={NAVBAR_TOGGLER_ICON} />
    </button>
  )
}

NavbarToggler.displayName = 'xbrick.NavbarToggler'
NavbarToggler.defaultProps = { tag: 'button' }
