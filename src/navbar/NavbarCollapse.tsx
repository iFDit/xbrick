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
  const className = classNames(props.className, NAVBAR_COLLAPSE)
  return <Collapse {...props} className={className} />
}

NavbarCollapse.displayName = 'xbrick.NavbarCollapse'
NavbarCollapse.defaultProps = { tag: 'div' }
