import React from 'react'
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
  return <Tag {...others} />
}

AlertLink.displayName = 'xbrick.AlertLink'
AlertLink.defaultProps = { tag: 'a' }

export const ALertLinkStyles = {
  LINK: A_LINK,
}
