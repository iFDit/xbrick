import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICarouselIndicatorProps extends IProps {
  /**
   * render how many of indicators.
   */
  items: {key: string}[]

  /**
   * set which item is current active.
   */
  activeIndex: number

  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * invoking when this component was clicked.
   * @param {number} index clicked index 
   */
  onClick? (index: number): void
}

export const CarouselIndicator: React.StatelessComponent<ICarouselIndicatorProps> = function (props: ICarouselIndicatorProps) {
  return null
}

CarouselIndicator.displayName = 'xbrick.CarouselIndicator'
CarouselIndicator.defaultProps = {
  tag: 'ol',
}
