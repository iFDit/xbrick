import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Button } from 'src/buttons/Button'

export interface INavbarTogglerProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>
}

export const NavbarToggler: React.StatelessComponent<INavbarTogglerProps> = function (props: INavbarTogglerProps) {
  const className = classNames(props.className, classes.NAVBAR_TOGGLER)
  return (
    <Button {...props} bstype="light" className={className}>
      <span className={classes.NAVBAR_TOGGLER_ICON} />
    </Button>
  )
}

NavbarToggler.displayName = 'xbrick.NavbarToggler'
NavbarToggler.defaultProps = {
  tag: 'button',
}
