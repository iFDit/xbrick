import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { mergeCall } from 'src/common/util'
import { DROPDOWN } from 'src/common/classes'
import { IProps, Direction } from 'src/common/props'
import { DropdownMenu, IDropdownMenuProps } from 'src/dropdowns/DropdownMenu'
import { DropdownItem, IDropdownItemProps } from 'src/dropdowns/DropdownItem'
import { DropdownToggle, IDropdownToggleProps } from 'src/dropdowns/DropdownToggle'

export interface IDropdownProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set the dropdown menu direction variations, the options is
   * 'up', 'left', 'right'.
   */
  direction?: Direction
}

export const DropdownContext = React.createContext({
  getToggleProps: (props: IDropdownToggleProps = {}) => props,
  getMenuProps: (props: IDropdownMenuProps = {}) => props,
  getItemProps: (props: IDropdownItemProps = {}) => props,
})

export class Dropdown extends React.Component<IDropdownProps> {
  static displayName = 'xbrick.Dropdown'
  static defaultProps = { tag: 'div' }
  static Item = (props: IDropdownItemProps) => (
    <DropdownContext.Consumer>
      {({getItemProps}) => <DropdownItem {...getItemProps(props)}/>}
    </DropdownContext.Consumer>
  )
  static Menu = (props: IDropdownMenuProps) => (
    <DropdownContext.Consumer>
      {({getMenuProps}) => <DropdownMenu {...getMenuProps(props)}/>}
    </DropdownContext.Consumer>
  )
  static Toggle = (props: IDropdownToggleProps) => (
    <DropdownContext.Consumer>
      {({getToggleProps}) => <DropdownToggle {...getToggleProps(props)}/>}
    </DropdownContext.Consumer>
  )

  public state = { open: false }

  public componentDidMount() {
    window.addEventListener('click', this.handleGlobalClick)
  }

  public componentWillUnmount() {
    window.removeEventListener('click', this.handleGlobalClick)
  }

  public handleGlobalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    try {
      if (!dom.contains(target)) {
        this.close()
      }
    } catch (e) {/**/}
  }

  public toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  public close = () => {
    const { open } = this.state
    open && this.setState({ open: false })
  }

  public getToggleProps = (props: IDropdownToggleProps) => {
    const { onClick } = props
    return { ...props, onClick: mergeCall(this.toggle, onClick) }
  }

  public getMenuProps = (props: IDropdownMenuProps) => {
    return { ...props, open: this.state.open, direction: this.props.direction }
  }

  public getItemProps = (props: IDropdownItemProps) => {
    const { header, disabled, onClick } = props
    return { ...props, onClick: mergeCall(!header && !disabled && this.close, onClick) }
  }

  render () {
    const { tag, direction, className, ...others } = this.props
    const { open } = this.state
    const Tag = tag!
    return (
      <DropdownContext.Provider
        value={{
          getMenuProps: this.getMenuProps,
          getItemProps: this.getItemProps,
          getToggleProps: this.getToggleProps,
        }}
      >
        <Tag {...others} className={dropdownClass({className, direction, open})} />
      </DropdownContext.Provider>
    )
  }
}

export function dropdownClass({className, open, direction = ''}: {className?: string, open?: boolean, direction?: Direction} = {}) {
  return classNames(
    className,
    DROPDOWN,
    {
      [cls.ACTIVE]: !!open,
      [cls[`DROP${direction.toUpperCase()}`]]: !!direction,
    },
  )
}
