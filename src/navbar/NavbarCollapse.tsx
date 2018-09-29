import React from 'react'
import classNames from 'classnames'
import { NAVBAR_COLLAPSE } from 'src/common/classes'
import { ICollapseProps, Collapse } from 'src/collapse/Collapse'

export interface INavbarCollapseProps extends ICollapseProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const NavbarCollapse: React.StatelessComponent<INavbarCollapseProps> = (props: INavbarCollapseProps) => {
  const { className, ...others } = props
  return <Collapse {...others} className={navbarCollapseClass({className})} />
}

NavbarCollapse.displayName = 'xbrick.NavbarCollapse'
NavbarCollapse.defaultProps = { tag: 'div' }

export function navbarCollapseClass({className}: {className?: string} = {}) {
  return classNames(className, NAVBAR_COLLAPSE)
}
