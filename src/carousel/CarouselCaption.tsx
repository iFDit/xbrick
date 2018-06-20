import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.CAROUSEL_CAPTION, classes.NONE, classes.MD_BLOCK)
  return <Tag {...others} className={className} />
}

CarouselCaption.displayName = 'xbrick.CarouselCaption'
CarouselCaption.defaultProps = {
  tag: 'div',
}
