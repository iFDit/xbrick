import * as React from 'react'
import { IProps } from 'src/common/props'
import * as classes from 'src/common/classes'

export interface IBreadcrumbProps extends IProps {
  /**
   * custom render element.
   * @default nav
   */
  tag?: string | React.Factory<any>
}

export const Breadcrumb: React.StatelessComponent<IBreadcrumbProps> = function (props: IBreadcrumbProps) {
  const { tag, children, ...rest } = props
  const Tag = tag!
  return (
    <Tag {...rest} aria-label="breadcrumb">
      <ol className={classes.BREADCRUMB}>
        {children}
      </ol>
    </Tag>
  )
}

Breadcrumb.displayName = 'xbrick.Breadcrumb'
Breadcrumb.defaultProps = {
  tag: 'nav'
}
