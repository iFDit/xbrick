import React from 'react'
import { IProps } from 'src/common/props'

export interface ITabProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Tab: React.StatelessComponent<ITabProps> = function (props: ITabProps) {
  const { tag, ...others } = props
  const Tag = tag!
  return <Tag {...others} />
}

Tab.displayName = 'xbrick.Tab'
Tab.defaultProps = {
  tag: 'div',
}
