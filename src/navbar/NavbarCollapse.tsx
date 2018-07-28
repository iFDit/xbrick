import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Collapse } from 'src/collapse/Collapse'

export interface INavbarCollapseProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set collapse is open or close.
   * @default false
   */
  expand?: boolean
}

export const NavbarCollapse: React.StatelessComponent<INavbarCollapseProps> = function (props: INavbarCollapseProps) {
  const { expand, children, ...others } = props
  const className = classNames(props.className, classes.NAVBAR_COLLAPSE)
  return (
    <Collapse {...others} className={className} open={expand}>
      {() => children}
    </Collapse>
  )
}

NavbarCollapse.displayName = 'xbrick.NavbarCollapse'
NavbarCollapse.defaultProps = {
  tag: 'div',
  expand: false,
}
