import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { Collapse, ICollapseProps } from 'src/collapse/Collapse'
import { NavbarContext } from 'src/navbar/Navbar'

export interface INavbarCollapseProps extends ICollapseProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

function getNavbarCollapseClass(props: INavbarCollapseProps) {
  return classNames(props.className, classes.NAVBAR_COLLAPSE)
}

export const NavbarCollapse: React.StatelessComponent<INavbarCollapseProps> = (props: INavbarCollapseProps) => (
  <NavbarContext.Consumer>
    {({getCollapseProps}) => <Collapse {...getCollapseProps(props)} className={getNavbarCollapseClass(props)}/>}
  </NavbarContext.Consumer>
)

NavbarCollapse.displayName = 'xbrick.NavbarCollapse'
NavbarCollapse.defaultProps = {
  tag: 'div',
}
