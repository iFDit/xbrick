import React from 'react'
import classNames from 'classnames'
import { IProps, PaginationJustify, PaginationSize } from 'src/common/props'
import { PAGINATION, PAGINATION_LG, PAGINATION_SM } from 'src/common/classes'
import { JUSTIFY_CONTENT_XS_CENTER, JUSTIFY_CONTENT_XS_END } from 'src/common/classes'

export interface IPaginationProps extends IProps {
  /**
   * custom render component.
   * @default ul
   */
  tag?: string | React.Factory<any>

  /**
   * set the horizontal alignment.
   */
  justify?: PaginationJustify

  /**
   * set pagination size.
   * @default middle
   */
  size?: PaginationSize
}

export const Pagination: React.StatelessComponent<IPaginationProps> = function (props: IPaginationProps) {
  const { tag, size, justify, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    PAGINATION,
    {
      [PAGINATION_LG]: size === 'large',
      [PAGINATION_SM]: size === 'small',
      [JUSTIFY_CONTENT_XS_CENTER]: justify === 'center',
      [JUSTIFY_CONTENT_XS_END]: justify === 'end',
    },
  )
  return <Tag {...others} className={className}/>
}

Pagination.displayName = 'xbrick.Pagination'
Pagination.defaultProps = {
  tag: 'ul',
  size: 'middle',
}
