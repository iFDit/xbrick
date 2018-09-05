import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { BREADCRUMB } from 'src/common/classes'

export interface IBreadcrumbProps extends IProps {
  /**
   * custom render element.
   * @default ol
   */
  tag?: string | React.Factory<any>
}

export const Breadcrumb: React.StatelessComponent<IBreadcrumbProps> = function (props: IBreadcrumbProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, BREADCRUMB)
  return (
    <Tag {...others} aria-label="breadcrumb" className={className}/>
  )
}

Breadcrumb.displayName = 'xbrick.Breadcrumb'
Breadcrumb.defaultProps = {
  tag: 'ol',
}
