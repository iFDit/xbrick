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
  const { tag, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} aria-label="breadcrumb" className={breadcrumbClass({className})}/>
  )
}

Breadcrumb.displayName = 'xbrick.Breadcrumb'
Breadcrumb.defaultProps = {
  tag: 'ol',
}

export function breadcrumbClass({ className }: { className?: string} = {}) {
  return classNames(className, BREADCRUMB)
}
