import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { isFunction } from 'lodash'
import { IProps } from 'src/common/props'

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
  const { tag, text, direction, ...others } = props
  const Tag = tag!
  const defaultClass = classes[`CAROUSEL_CONTROL_${direction!.toUpperCase()}`]
  const className = classNames(
    props.className,
    defaultClass,
  )
  return (
    <Tag {...others} className={className}>
      {isFunction(text) ? text({className: classNames(`${defaultClass}-${classes.ICON}`)}) : text}
    </Tag>
  )
}

CarouselControl.displayName = 'xbrick.CarouselControl'
CarouselControl.defaultProps = {
  tag: 'a',
  direction: 'prev',
  text: (props: any) => <span className={props.className}/>,
}