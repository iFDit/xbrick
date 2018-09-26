import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { PAGE_LINK } from 'src/common/classes'

export interface IPageLinkProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const PageLink: React.StatelessComponent<IPageLinkProps> = function (props: IPageLinkProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={pageLinkClass({className})}/>
}

PageLink.displayName = 'xbrick.PaginationLink'
PageLink.defaultProps = { tag: 'a' }

export function pageLinkClass({className}: any) {
  return classNames(className, PAGE_LINK)
}
