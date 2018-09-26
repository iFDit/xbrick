import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { BUTTON_GROUP } from 'src/common/classes'
import { Dropdown, IDropdownProps, DropdownContext } from 'src/dropdowns/Dropdown'

export interface ISplitDropdownProps extends IDropdownProps {}

export class SplitDropdown extends Dropdown {
  static displayName = 'xbrick.SplitDropdown'
  static splitDropdownClass({className, direction}: any) {
    return classNames(
      className,
      BUTTON_GROUP,
      {
        [cls[`DROP${direction.toUpperCase()}`]]: !!direction,
      },
    )
  }

  render () {
    const { tag, direction, className, ...others } = this.props
    const Tag = tag!
    return (
      <DropdownContext.Provider
        value={{
          getMenuProps: this.getMenuProps,
          getItemProps: this.getItemProps,
          getToggleProps: this.getToggleProps,
        }}
      >
        <Tag {...others} className={SplitDropdown.splitDropdownClass({className, direction})} />
      </DropdownContext.Provider>
    )
  }
}
