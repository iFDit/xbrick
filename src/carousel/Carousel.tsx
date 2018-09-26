import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CAROUSEL } from 'src/common/classes'

export interface ICarouselProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Carousel: React.StatelessComponent<ICarouselProps> = function (props: ICarouselProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={carouselClass({className})} />
  )
}

Carousel.displayName = 'xbrick.Carousel'
Carousel.defaultProps = { tag: 'div' }

export function carouselClass({className}: any) {
  return classNames(className, CAROUSEL)
}
