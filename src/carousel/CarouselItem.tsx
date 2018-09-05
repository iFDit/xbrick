import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CAROUSEL_ITEM } from 'src/common/classes'

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
  const className = classNames(props.className, CAROUSEL_ITEM)
  return <Tag {...others} className={className} />
}

CarouselItem.displayName = 'xbrick.CarouselItem'
CarouselItem.defaultProps = {
  tag: 'div',
}
