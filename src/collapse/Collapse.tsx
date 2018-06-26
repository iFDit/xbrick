import * as React from 'react'
import { IProps } from 'src/common/props'
import { Slide } from 'src/animate/Slide'

export interface ICollapseProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Set the Collapse hide/show.
   * @default false
   */
  show?: boolean

  /**
   * Handler invoked after the Collapse was hidden/showed.
   * @param {boolean} show  - mean the Collapse was hidden or showed.
   */
  afterAnimate?(show: boolean): void
}

export const Collapse: React.StatelessComponent<ICollapseProps> = function (props: ICollapseProps) {
  const { afterAnimate, ...others } = props
  return <Slide {...others} afterStateChange={afterAnimate} />
}

Collapse.displayName = 'xbrick.Collapse'
Collapse.defaultProps = {
  show: false,
  tag: 'div',
}
