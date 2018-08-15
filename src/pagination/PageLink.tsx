import React from 'react'
import classNames from 'classnames'
import { PAGE_LINK } from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IPageLinkProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const PageLink: React.StatelessComponent<IPageLinkProps> = function (props: IPageLinkProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, PAGE_LINK)
  return <Tag {...others} className={className}/>
}

PageLink.displayName = 'xbrick.PaginationLink'
PageLink.defaultProps = {
  tag: 'a',
}
