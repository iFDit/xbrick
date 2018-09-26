import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IButtonToolbarProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ButtonToolbar: React.StatelessComponent<IButtonToolbarProps> = function (props: IButtonToolbarProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={buttonToolbarClass({className})} />
}

ButtonToolbar.displayName = 'xbrick.ButtonToolbar'
ButtonToolbar.defaultProps = { tag: 'div' }

export function buttonToolbarClass({ className }: { className?: string } = {}) {
  return classNames(
    className,
    cls.BUTTON_TOOLBAR,
  )
}
