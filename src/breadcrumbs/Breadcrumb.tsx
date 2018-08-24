import React from 'react'
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
  return (
    <Tag {...others} aria-label="breadcrumb" />
  )
}

Breadcrumb.displayName = 'xbrick.Breadcrumb'
Breadcrumb.defaultProps = {
  tag: 'ol',
}

export const BreadcrumbStyles = {
  BREADCRUMB: BREADCRUMB,
}
