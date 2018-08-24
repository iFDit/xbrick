import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { Button } from 'src/buttons/Button'
import { DropdownContext } from 'src/dropdowns/Dropdown'
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

  /**
   * use for split styles.
   * @default false
   */
  split?: boolean

  /**
   * use in navlink components.
   * @default false
   */
  navLink?: boolean

  /**
   * use Button component.
   * @default false
   */
  button?: boolean
}

const Toggle: React.StatelessComponent<IDropdownToggleProps> = function (props: IDropdownToggleProps) {
  const { tag, split, navLink, button, ...others } = props
  const t = tag === 'button' && navLink ? 'a' : tag
  const Tag = (button ? Button : t) as any
  const className = classNames(
    props.className,
    classes.DROPDOWN_TOGGLE,
    {
      [classes.NAV_LINK]: !!navLink,
      [classes.DROPDOWN_TOGGLE_SPLIT]: !!split,
    },
  )
  return <Tag {...others} tag={t} className={className} />
}

export const DropdownToggle: React.StatelessComponent<IDropdownToggleProps> = (props: IDropdownToggleProps) => (
  <DropdownContext.Consumer>
    {({getToggleProps}) => <Toggle {...getToggleProps(props)}/>}
  </DropdownContext.Consumer>
)

DropdownToggle.displayName = 'xbrick.DropdownToggle'
DropdownToggle.defaultProps = {
  tag: 'button',
  size: 'middle',
  bstype: 'primary',
  split: false,
  button: false,
  navLink: false,
}
