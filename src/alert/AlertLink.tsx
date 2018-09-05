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
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, A_LINK)
  return <Tag {...others} className={className}/>
}

AlertLink.displayName = 'xbrick.AlertLink'
AlertLink.defaultProps = { tag: 'a' }
