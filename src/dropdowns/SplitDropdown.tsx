import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { BUTTON_GROUP } from 'src/common/classes'
import { Dropdown, IDropdownProps, DropdownContext } from 'src/dropdowns/Dropdown'

export interface ISplitDropdownProps extends IDropdownProps {}

export class SplitDropdown extends Dropdown {
  static displayName = 'xbrick.SplitDropdown'
  render () {
    const { tag, direction = '', ...others } = this.props
    const Tag = tag!
    const className = classNames(
      this.props.className,
      BUTTON_GROUP,
      {
        [cls[`DROP${direction.toUpperCase()}`]]: !!direction,
      },
    )

    return (
      <DropdownContext.Provider
        value={{
          getMenuProps: this.getMenuProps,
          getItemProps: this.getItemProps,
          getToggleProps: this.getToggleProps,
        }}
      >
        <Tag {...others} className={className} />
      </DropdownContext.Provider>
    )
  }
}
