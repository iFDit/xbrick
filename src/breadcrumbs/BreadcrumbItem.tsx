import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { ACTIVE, BREADCRUMB_ITEM } from 'src/common/classes'

export interface IBreadcrumbItemProps extends IProps {
  /**
   * custom render element.
   * @default li
   */
  tag?: string | React.Factory<any>

  /**
   * set item is actived.
   * @default false
   */
  active?: boolean
}

export const BreadcrumbItem: React.StatelessComponent<IBreadcrumbItemProps> = function (props: IBreadcrumbItemProps) {
  const { tag, active, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, BREADCRUMB_ITEM, {
    [ACTIVE]: !!active,
  })
  return <Tag {...others} className={className}/>
}

BreadcrumbItem.displayName = 'xbrick.BreadcrumbItem'
BreadcrumbItem.defaultProps = { tag: 'li', active: false }
