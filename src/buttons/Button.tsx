import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
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

const ButtonInner: React.StatelessComponent<IButtonProps> = function (props: IButtonProps, ref: any) {
  const { tag, size, color, block, active, outline, disabled, className, ...others } = props
  const Tag = tag!
  return (
    <Tag
      {...others}
      ref={ref}
      className={buttonClass({className, color, block, size, outline, disabled, active})}
    />
  )
}

export const Button = React.forwardRef(ButtonInner)

ButtonInner.displayName = 'xbrick.Button'
Button.defaultProps = {
  color: 'primary',
  disabled: false,
  outline: false,
  active: false,
  tag: 'button',
  block: false,
}

export type ButtonClass = {
  className?: string,
  color?: ButtonType,
  block?: boolean,
  size?: ButtonSize,
  outline?: boolean,
  disabled?: boolean,
  active?: boolean,
}

export function buttonClass({ className, color = '', block, size, outline, disabled, active }: ButtonClass = {}) {
  return classNames(className, cls.BUTTON, {
    [cls[`BTN${outline ? '_O' : ''}_${color!.toUpperCase()}`]]: !!color,
    [cls.BUTTON_BLOCK]: !!block,
    [cls.BTN_SMALL]: size === 'small',
    [cls.BTN_LARGE]: size === 'large',
    [cls.DISABLED]: !!disabled,
    [cls.ACTIVE]: !!active,
  })
}
