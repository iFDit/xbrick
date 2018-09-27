import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { Button } from 'src/buttons/Button'
import { DROPDOWN_TOGGLE, DROPDOWN_TOGGLE_SPLIT } from 'src/common/classes'

export interface IDropdownToggleProps extends IProps {
  /**
   * custom render component.
   * @default button
   */
  tag?: string | React.Factory<any>

  /**
   * set split dropdown.
   * @default false
   */
  split?: boolean

  /**
   * use Button component.
   * @default false
   */
  button?: boolean
}

export const DropdownToggle: React.StatelessComponent<IDropdownToggleProps> = function (props: IDropdownToggleProps) {
  const { tag, split, button, className, ...others } = props
  const Tag = (button ? Button : tag) as any
  return <Tag {...others} className={dropdownToggleClass({className, split})} />
}

DropdownToggle.displayName = 'xbrick.DropdownToggle'
DropdownToggle.defaultProps = {
  tag: 'button',
  split: false,
  button: false,
}

export function dropdownToggleClass({className, split}: {className?: string, split?: boolean} = {}) {
  return classNames(
    className,
    DROPDOWN_TOGGLE,
    {
      [DROPDOWN_TOGGLE_SPLIT]: !!split,
    },
  )
}
