import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { Button } from 'src/buttons/Button'
import { IProps, ButtonSize, ButtonType } from 'src/common/props'

export interface IDropdownToggleProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>

  /**
   * the same as Button size, this value will pass down
   * to Button.
   * @default middle
   */
  size?: ButtonSize

  /**
   * the same as Button types.
   * @default primary
   */
  bstype?: ButtonType
}

export const DropdownToggle: React.StatelessComponent<IDropdownToggleProps> = function (props: IDropdownToggleProps) {
  const className = classNames(props.className, classes.DROPDOWN_TOGGLE)
  return <Button {...props} className={className} />
}

DropdownToggle.displayName = 'xbrick.DropdownToggle'
DropdownToggle.defaultProps = {
  tag: 'button',
  size: 'middle',
  bstype: 'primary',
}
