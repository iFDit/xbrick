import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IButtonToolbarProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ButtonToolbar: React.StatelessComponent<IButtonToolbarProps> = function (props: IButtonToolbarProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.BUTTON_TOOLBAR,
  )
  return <Tag {...others} className={className} />
}

ButtonToolbar.displayName = 'xbrick.ButtonToolbar'
ButtonToolbar.defaultProps = {
  tag: 'div'
}
