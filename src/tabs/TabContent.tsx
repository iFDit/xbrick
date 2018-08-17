import React from 'react'
import classNames from 'classnames'
import { ACTIVE, TAB_CONTENT } from 'src/common/classes'
import { Fade } from 'src/animate/Fade'
import { IProps } from 'src/common/props'

export interface ITabContentProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * show/hide content.
   * @default false
   */
  open?: boolean
}

export const TabContent: React.StatelessComponent<ITabContentProps> = function (props: ITabContentProps) {
  const { open, ...others } = props
  const className = classNames(props.className, TAB_CONTENT, open && ACTIVE)

  return <Fade {...others} className={className} from={0.3} to={1}/>
}

TabContent.displayName = 'xbrick.TabContent'
TabContent.defaultProps = {
  tag: 'div',
  open: false,
}
