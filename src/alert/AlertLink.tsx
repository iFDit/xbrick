import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { A_LINK } from 'src/common/classes'

export interface IAlertLinkProps extends IProps {
  /**
   * Alert custom render tag.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const AlertLink: React.StatelessComponent<IAlertLinkProps> = function (props: IAlertLinkProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={alertLinkClass({className})}/>
}

AlertLink.displayName = 'xbrick.AlertLink'
AlertLink.defaultProps = { tag: 'a' }

export function alertLinkClass({ className }: { className?: string } = {}) {
  return classNames(className, A_LINK)
}
