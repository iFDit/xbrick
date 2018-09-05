import React from 'react'
import { PageItem } from 'src/pagination/PageItem'
import { PageLink } from 'src/pagination/PageLink'
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
  const { tag, direction, ...others } = props
  const Tag = tag!
  return (
    <PageItem>
      <PageLink href="#"  {...others}>
        <Tag>
          {direction === 'prev' ? <>&laquo;</> : <>&raquo;</>}
        </Tag>
        <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
      </PageLink>
    </PageItem>
  )
}

PageIndicator.displayName = 'xbrick.PageIndicator'
PageIndicator.defaultProps = {
  tag: 'span',
  direction: 'prev',
}
