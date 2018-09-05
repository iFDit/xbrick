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
  const { tag, split, button, ...others } = props
  const Tag = (button ? Button : tag) as any
  const className = classNames(
    props.className,
    DROPDOWN_TOGGLE,
    {
      [DROPDOWN_TOGGLE_SPLIT]: !!split,
    },
  )
  return <Tag {...others} className={className} />
}

DropdownToggle.displayName = 'xbrick.DropdownToggle'
DropdownToggle.defaultProps = {
  tag: 'button',
  split: false,
  button: false,
}
