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

const omitProps = ['autoplay', 'afterChange']
export const Carousel: React.StatelessComponent<ICarouselProps> = function (props: ICarouselProps) {
  const { tag, children, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CAROUSEL)

  return (
    <Tag {...omit(others, omitProps)} className={className} />
  )
}

Carousel.displayName = 'xbrick.Carousel'
Carousel.defaultProps = {
  tag: 'div',
  autoplay: false,
}
