import React from 'react'
import * as cls from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IButtonProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>
}

export const Button: React.StatelessComponent<IButtonProps> = function (props: IButtonProps) {
  const { tag, getRef, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} ref={getRef}/>
  )
}

Button.displayName = 'xbrick.Button'
Button.defaultProps = {
  tag: 'button',
}

export const ButtonStyles = {
  BUTTON: cls.BUTTON,
  PRIMARY: cls.BTN_PRIMARY,
  SECONDARY: cls.BTN_SECONDARY,
  SUCCESS: cls.BTN_SUCCESS,
  DANGER: cls.BTN_DANGER,
  WARNING: cls.BTN_WARNING,
  INFO: cls.BTN_INFO,
  LIGHT: cls.BTN_LIGHT,
  DARK: cls.BTN_DARK,
  BLOCK: cls.BUTTON_BLOCK,
  ACTIVE: cls.ACTIVE,
  DISABLED: cls.DISABLED,
  SMALL: cls.SMALL,
  LARGE: cls.LARGE,
  O_PRIMARY: cls.BTN_PRIMARY,
  O_SECONDARY: cls.BTN_SECONDARY,
  O_SUCCESS: cls.BTN_SUCCESS,
  O_DANGER: cls.BTN_DANGER,
  O_WARNING: cls.BTN_WARNING,
  O_INFO: cls.BTN_INFO,
  O_LIGHT: cls.BTN_LIGHT,
  O_DARK: cls.BTN_DARK,
}
