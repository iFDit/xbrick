import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IInputGroupAddonProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * addon at prepend(false) or append(true).
   * @default false
   */
  append?: boolean
}

export const InputGroupAddon: React.StatelessComponent<IInputGroupAddonProps> = function (props: IInputGroupAddonProps) {
  const { tag, append, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    append ? classes.INPUT_GROUP_APPEND : classes.INPUT_GROUP_PREPEND,
  )
  
  return <Tag {...others} className={className} />
}

InputGroupAddon.displayName = 'xbrick.InputGroupAddon'
InputGroupAddon.defaultProps = {
  tag: 'div',
  append: false,
}
