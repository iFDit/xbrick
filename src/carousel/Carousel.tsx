import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICarouselProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Carousel: React.StatelessComponent<ICarouselProps> = function (props: ICarouselProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CAROUSEL)

  return (
    <Tag {...others} className={className} />
  )
}

Carousel.displayName = 'xbrick.Carousel'
Carousel.defaultProps = {
  tag: 'div',
}
