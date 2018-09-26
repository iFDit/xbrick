import React from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { IProps } from 'src/common/props'
import { POPOVER_HEADER } from 'src/common/classes'

export interface IPopoverHeaderProps extends IProps {
  /**
   * custom render component.
   * @default h3
   */
  tag?: string | React.Factory<any>

  /**
   * open/close component.
   * @default false
   */
  open?: boolean
}

export const PopoverHeader: React.StatelessComponent<IPopoverHeaderProps> = function (props: IPopoverHeaderProps) {
  const { open, className, ...others } = props
  const from = open ? 0 : 1
  const to = open ? 1 : 0
  return (
    <Fade {...others} from={from} to={to} className={popoverHeaderClass({className})}/>
  )
}

PopoverHeader.displayName = 'xbrick.PopoverHeader'
PopoverHeader.defaultProps = { tag: 'h3' }

export function popoverHeaderClass({className}: any) {
  return classNames(className, POPOVER_HEADER)
}
