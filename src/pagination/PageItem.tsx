import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { DISABLED, ACTIVE, PAGE_ITEM } from 'src/common/classes'

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
  const { tag, disabled, active, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={pageItemClass({className, active, disabled})} />
}

PageItem.displayName = 'xbrick.PaginationItem'
PageItem.defaultProps = {
  tag: 'li',
  disabled: false,
  active: false,
}

export function pageItemClass({className, active, disabled}: any) {
  return classNames(
    className,
    PAGE_ITEM,
    disabled && DISABLED,
    active && ACTIVE,
  )
}
