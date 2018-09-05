import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { SMALL, LARGE, ACTIVE, DISABLED, BUTTON, BUTTON_BLOCK } from 'src/common/classes'
import { IProps, ButtonSize, ButtonType } from 'src/common/props'

export interface IButtonProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>

  /**
   * shortcut of setting button color.
   * @default primary
   */
  color?: ButtonType

  /**
   * block style button.
   * @default false
   */
  block?: boolean

  /**
   * outline style button.
   * @default false
   */
  outline?: boolean

  /**
   * button size.
   */
  size?: ButtonSize

  /**
   * toggle button disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * toggle button active.
   * @default false
   */
  active?: boolean
}

export const Button: React.StatelessComponent<IButtonProps> = function (props: IButtonProps) {
  const { tag, size, color, block, getRef, active, outline, disabled, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, BUTTON, {
    [cls[`BTN${outline ? '_O' : ''}_${color!.toUpperCase()}`]]: !!color,
    [BUTTON_BLOCK]: !!block,
    [SMALL]: size === 'small',
    [LARGE]: size === 'large',
    [DISABLED]: !!disabled,
    [ACTIVE]: !!active,
  })
  return (
    <Tag {...others} ref={getRef} className={className}/>
  )
}

Button.displayName = 'xbrick.Button'
Button.defaultProps = {
  color: 'primary',
  disabled: false,
  outline: false,
  active: false,
  tag: 'button',
  block: false,
}
