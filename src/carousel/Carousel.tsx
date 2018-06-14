import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit } from 'lodash'
import { IProps } from 'src/common/props'

export interface ICarouselProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * trigger before carousel item changed.
   * @param {number} from  - the current item.
   * @param {number} to    - will active item.
   */
  beforeChange? (from: number, to: number): void

  /**
   * trigger after carousel item changed.
   * @param {number} current 
   */
  afterChange? (current: number): void

  /**
   * Automatically round.
   * @default false
   */
  autoplay?: boolean
}

export const Carousel: React.StatelessComponent<ICarouselProps> = function (props: ICarouselProps) {
  return null
}

interface ITrackProps extends IProps {}

const Track: React.StatelessComponent<ITrackProps> = function (props: ITrackProps) {
  return (
    <div></div>
  )
}

Carousel.displayName = 'xbrick.Carousel'
Carousel.defaultProps = {
  tag: 'div',
  autoplay: false,
}
