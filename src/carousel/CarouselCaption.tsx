import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { NONE, MD_BLOCK, CAROUSEL_CAPTION } from 'src/common/classes'

export interface ICarouselCaptionProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CarouselCaption: React.StatelessComponent<ICarouselCaptionProps> = function (props: ICarouselCaptionProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={carouselCaptionClass({className})} />
}

CarouselCaption.displayName = 'xbrick.CarouselCaption'
CarouselCaption.defaultProps = { tag: 'div' }

export function carouselCaptionClass({className}: {className?: string} = {}) {
  return classNames(className, CAROUSEL_CAPTION, NONE, MD_BLOCK)
}
