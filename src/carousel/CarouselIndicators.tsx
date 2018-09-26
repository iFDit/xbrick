import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { ACTIVE, CAROUSEL_INDICATORS } from 'src/common/classes'

export interface ICarouselIndicatorProps extends IProps {
  /**
   * render how many of indicators.
   * @default 0
   */
  amount?: number | string

  /**
   * set which item is current active.
   */
  activeIndex?: number

  /**
   * custom render component.
   * @default ol
   */
  tag?: string | React.Factory<any>

  /**
   * invoking when this component was clicked.
   * @param {number} index clicked index 
   */
  onItemClick? (index: number): void
}

export const CarouselIndicators: React.StatelessComponent<ICarouselIndicatorProps> = function (props: ICarouselIndicatorProps) {
  const { tag, amount, className, onItemClick, activeIndex, ...others } = props
  const Tag = tag!
  const itemNodes = [...Array(+amount!).fill(1)].map((_, idx) => (
    <li
      key={idx}
      className={classNames({[ACTIVE]: activeIndex === idx})}
      onClick={(e) => {
        e.preventDefault()
        onItemClick!(idx)
      }}
    />
  ))
  return <Tag {...others} className={carouselIndicatorClass({className})}>{itemNodes}</Tag>
}

CarouselIndicators.displayName = 'xbrick.CarouselIndicator'
CarouselIndicators.defaultProps = {
  tag: 'ol',
  amount: 0,
  onItemClick: () => {/* */},
}

export function carouselIndicatorClass({className}: any) {
  return classNames(className, CAROUSEL_INDICATORS)
}
