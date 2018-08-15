import React from 'react'
import { IProps, PageDirection } from 'src/common/props'

export interface IPageIndicatorProps extends IProps {
  /**
   * custom render component.
   * @default span
   */
  tag?: string | React.Factory<any>

  /**
   * set indicator direction, the Options have 'prev' or 'next'.
   * @default prev
   */
  direction?: PageDirection
}

export const PageIndicator: React.StatelessComponent<IPageIndicatorProps> = function (props: IPageIndicatorProps) {
  const { tag, symbol, direction, ...others } = props
  const Tag = tag!
  return (
    <>
      <Tag {...others}>
        {direction === 'prev' ? <>&laquo;</> : <>&raquo;</>}
      </Tag>
      <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
    </>
  )
}

PageIndicator.displayName = 'xbrick.PageIndicator'
PageIndicator.defaultProps = {
  tag: 'span',
  symbol: false,
  direction: 'prev',
}
