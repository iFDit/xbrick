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
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CAROUSEL_CAPTION, NONE, MD_BLOCK)
  return <Tag {...others} className={className} />
}

CarouselCaption.displayName = 'xbrick.CarouselCaption'
CarouselCaption.defaultProps = {
  tag: 'div',
}
