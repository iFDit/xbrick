import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICarouselIndicatorProps extends IProps {
  /**
   * render how many of indicators.
   */
  items: {key: string}[]

  /**
   * set which item is current active.
   */
  activeIndex?: number

  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * invoking when this component was clicked.
   * @param {number} index clicked index 
   */
  onItemClick? (index: number): void
}

export const CarouselIndicators: React.StatelessComponent<ICarouselIndicatorProps> = function (props: ICarouselIndicatorProps) {
  const { tag, items, onItemClick, activeIndex, ...others } = props
  const Tag = tag!
  const itemNodes = items.map((item, idx) => (
    <li
      key={item.key || idx}
      className={classNames({[classes.ACTIVE]: activeIndex === idx})}
      onClick={(e) => {
        e.preventDefault()
        onItemClick!(idx)
      }}
    />
  ))
  return <Tag {...others} className={classNames(props.className, classes.CAROUSEL_INDICATORS)}>{itemNodes}</Tag>
}

CarouselIndicators.displayName = 'xbrick.CarouselIndicator'
CarouselIndicators.defaultProps = {
  tag: 'ol',
  items: [],
  onItemClick: () => {/* */},
}
