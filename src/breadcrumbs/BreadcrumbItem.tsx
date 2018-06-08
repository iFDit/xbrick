import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit } from 'lodash'
import { IProps } from 'src/common/props'


export interface IBreadcrumbItemProps extends IProps {
  /**
   * custom render element.
   * @default li
   */
  tag?: string | React.Factory<any>

  /**
   * Sets whether the current item is active.
   * @default false
   */
  active?: boolean
}

export const BreadcrumbItem: React.StatelessComponent<IBreadcrumbItemProps> = function (props: IBreadcrumbItemProps) {
  const { tag, children, ...rest } = props
  const nextProps = { ...rest, className: breadcrumbItemClasses(props) }
  const Tag = tag!
  return (
    <Tag {...omit(nextProps, 'active')}>
      {children}
    </Tag>
  )
}

BreadcrumbItem.displayName = 'xbrick.BreadcrumbItem'
BreadcrumbItem.defaultProps = {
  tag: 'li',
  active: false,
}

function breadcrumbItemClasses(props: IBreadcrumbItemProps) {
  return classNames(
    props.className,
    classes.BREADCRUMB_ITEM,
    { [classes.ACTIVE]: !!props.active },
  )
}
