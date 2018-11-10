import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { POPOVER_HEADER } from 'src/common/classes'

export interface IPopoverHeaderProps extends IProps {
  /**
   * custom render component.
   * @default h3
   */
  tag?: string | React.Factory<any>
}

export const PopoverHeader: React.StatelessComponent<IPopoverHeaderProps> = function (props: IPopoverHeaderProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={popoverHeaderClass({className})}/>
  )
}

PopoverHeader.displayName = 'xbrick.PopoverHeader'
PopoverHeader.defaultProps = { tag: 'h3' }

export function popoverHeaderClass({className}: {className?: string} = {}) {
  return classNames(className, POPOVER_HEADER)
}
