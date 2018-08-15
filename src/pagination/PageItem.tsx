import React from 'react'
import classNames from 'classnames'
import { DISABLED, ACTIVE, PAGE_ITEM } from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IPageItemProps extends IProps {
  /**
   * custom render component.
   * @default li
   */
  tag?: string | React.Factory<any>

  /**
   * set item disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * set item active.
   * @default false
   */
  active?: boolean
}

export const PageItem: React.StatelessComponent<IPageItemProps> = function (props: IPageItemProps) {
  const { tag, disabled, active, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    PAGE_ITEM,
    disabled && DISABLED,
    active && ACTIVE,
  )
  return <Tag {...others} className={className} />
}

PageItem.displayName = 'xbrick.PaginationItem'
PageItem.defaultProps = {
  tag: 'li',
  disabled: false,
  active: false,
}
