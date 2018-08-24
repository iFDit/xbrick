import React from 'react'
import { IProps } from 'src/common/props'
import { ACTIVE, BREADCRUMB_ITEM } from 'src/common/classes'

export interface IBreadcrumbItemProps extends IProps {
  /**
   * custom render element.
   * @default li
   */
  tag?: string | React.Factory<any>
}

export const BreadcrumbItem: React.StatelessComponent<IBreadcrumbItemProps> = function (props: IBreadcrumbItemProps) {
  const { tag, ...others } = props
  const Tag = tag!
  return <Tag {...others} />
}

BreadcrumbItem.displayName = 'xbrick.BreadcrumbItem'
BreadcrumbItem.defaultProps = { tag: 'li' }

export const BreadcrumbItemStyles = {
  ACTIVE: ACTIVE,
  ITEM: BREADCRUMB_ITEM,
}
