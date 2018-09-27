import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { Direction } from 'src/common/props'
import { BUTTON_GROUP } from 'src/common/classes'
import { Dropdown, IDropdownProps, DropdownContext } from 'src/dropdowns/Dropdown'

export interface ISplitDropdownProps extends IDropdownProps {}

export class SplitDropdown extends Dropdown {
  static displayName = 'xbrick.SplitDropdown'

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
        <Tag {...others} className={splitDropdownClass({className, direction})} />
      </DropdownContext.Provider>
    )
  }
}

export function splitDropdownClass({className, direction = ''}: {className?: string, direction?: Direction} = {}) {
  return classNames(
    className,
    BUTTON_GROUP,
    {
      [cls[`DROP${direction.toUpperCase()}`]]: !!direction,
    },
  )
}
