import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit } from 'lodash'
import { IProps, ButtonType, ButtonSize } from 'src/common/props'

export interface IButtonProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>

  /**
   * change Button size. The optional values are
   * `large`, `small` or `middle`.
   * @default middle
   */
  size?: ButtonSize

  /**
   * Button types.
   * @default primary
   */
  bstype?: ButtonType

  /**
   * If true, will display an block style button.
   * @default false
   */
  block?: boolean

  /**
   * Determines whether the button is active.
   * @default fasle
   */
  active?: boolean

  /**
   * Render a button, but not the hefty background colors they bring.
   * @default false
   */
  outline?: boolean

  /**
   * Determines whether the button is disabled. It make buttons look inactive.
   */
  disabled?: boolean
}

const noop = () => {}
const omitName = ['bstype', 'size', 'block', 'active', 'outline']

export const Button: React.StatelessComponent<IButtonProps> = function (props: IButtonProps) {
  const { tag, onClick, disabled, children, ...rest } = props
  const Tag = tag!
  const nextProps = {
    ...rest,
    onClick: disabled ? noop : onClick,
    className: buttonClasses(props),
  }
  return (
    <Tag {...omit(nextProps, omitName)}>
      {children}
    </Tag>
  )
}

Button.displayName = 'xbrick.Button'
Button.defaultProps = {
  bstype: 'primary',
  tag: 'button',
  size: 'middle',
  block: false,
  active: false,
  outline: false,
  disabled: false,
}

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

function buttonClasses(props: IButtonProps) {
  const { bstype, size, block, active, outline, disabled } = props
  const typeClass = outline ?
    `${classes.BUTTON}-outline-${classes[bstype!.toUpperCase()]}`
    : `${classes.BUTTON}-${classes[bstype!.toUpperCase()]}`
  return classNames(
    typeClass,
    classes.BUTTON,
    props.className,
    {
      [classes.ACTIVE]: !!active,
      [classes.DISABLED]: !!disabled,
      [classes.BUTTON_BLOCK]: !!block,
      [`${classes.BUTTON}-${sizeMap[size!]}`]: !! sizeMap[size!],
    }
  )
}