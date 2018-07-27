import * as React from 'react'
import { Slide, ISlideProps } from 'src/animate/Slide'

export interface ICollapseProps extends Pick<ISlideProps, 'children'> {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Set the Collapse hide/show.
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Set the Collapse hide/show.
   */
  open?: boolean

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
  defaultOpen: false,
  tag: 'div',
}
