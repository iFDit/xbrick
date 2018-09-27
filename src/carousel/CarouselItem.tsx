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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={carouselItemClass({className})} />
}

CarouselItem.displayName = 'xbrick.CarouselItem'
CarouselItem.defaultProps = { tag: 'div' }

export function carouselItemClass({className}: {className?: string} = {}) {
  return classNames(className, CAROUSEL_ITEM)
}
