import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { POPOVER_BODY, XPOPOVER_BODY } from 'src/common/classes'

export interface IPopoverBody extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const PopoverBody: React.StatelessComponent<IPopoverBody> = function (props: IPopoverBody) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={popoverBodyClass({className})}/>
  )
}

PopoverBody.displayName = 'xbrick.PopoverBody'
PopoverBody.defaultProps = { tag: 'div' }

export function popoverBodyClass({className}: {className?: string} = {}) {
  return classNames(className, POPOVER_BODY, XPOPOVER_BODY)
}
