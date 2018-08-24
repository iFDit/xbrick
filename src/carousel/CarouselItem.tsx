import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICarouselItemPorps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CarouselItem: React.StatelessComponent<ICarouselItemPorps> = function (props: ICarouselItemPorps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CAROUSEL_ITEM)
  return <Tag {...others} className={className} />
}

CarouselItem.displayName = 'xbrick.CarouselItem'
CarouselItem.defaultProps = {
  tag: 'div',
}
