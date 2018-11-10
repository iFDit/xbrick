import React from 'react'
import classNames from 'classnames'
import { isFunction } from 'src/common/minLodash'
import { IProps } from 'src/common/props'
import { ICON } from 'src/common/classes'
import * as cls from 'src/common/classes'

export interface ICarouselControlProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>

  /**
   * set carousel control direction button. There are two options of
   * 'prev' and 'next'
   * @default prev
   */
  direction?: 'prev' | 'next'

  /**
   * custom control text.
   */
  text?: string | React.ReactNode
}

export const CarouselControl: React.StatelessComponent<ICarouselControlProps> = function (props: ICarouselControlProps) {
  const { tag, text, direction, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={carouselControlClass({className, direction})}>
      {isFunction(text) ? text({direction}) : text}
    </Tag>
  )
}

CarouselControl.displayName = 'xbrick.CarouselControl'
CarouselControl.defaultProps = {
  tag: 'a',
  direction: 'prev',
  text: ({direction}: any) => <span className={`${cls[`CAROUSEL_CONTROL_${direction!.toUpperCase()}`]}-${ICON}`}/>,
}

export type CarouselControlClass = {
  className?: string,
  direction?: 'prev' | 'next',
}
export function carouselControlClass({className, direction = 'prev'}: CarouselControlClass = {}) {
  const defaultClass = cls[`CAROUSEL_CONTROL_${direction!.toUpperCase()}`]
  return classNames(
    className,
    defaultClass,
  )
}
