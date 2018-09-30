import React from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { IProps } from 'src/common/props'
import { POPOVER_BODY, XPOPOVER_BODY } from 'src/common/classes'

export interface IPopoverBody extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * open/close component.
   * @default false
   */
  open?: boolean
}

export const PopoverBody: React.StatelessComponent<IPopoverBody> = function (props: IPopoverBody) {
  const { open, className, ...others } = props
  const from = open ? 0 : 1
  const to = open ? 1 : 0
  return (
    <Fade {...others} from={from} to={to} className={popoverBodyClass({className})}/>
  )
}

PopoverBody.displayName = 'xbrick.PopoverBody'
PopoverBody.defaultProps = { tag: 'div' }

export function popoverBodyClass({className}: {className?: string} = {}) {
  return classNames(className, POPOVER_BODY, XPOPOVER_BODY)
}
