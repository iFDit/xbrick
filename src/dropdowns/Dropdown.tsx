import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { mergeCall } from 'src/common/util'
import { IProps, Direction } from 'src/common/props'
import { IDropdownMenuProps } from 'src/dropdowns/DropdownMenu'
import { IDropdownItemProps } from 'src/dropdowns/DropdownItem'
import { IDropdownToggleProps } from 'src/dropdowns/DropdownToggle'

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

  /**
   * use in nav-item components.
   * @default fasle
   */
  navItem?: boolean

  /**
   * use btn-group as className.
   * @default false
   */
  btnGroup?: boolean
}

const noop = (props: any) => props
export const DropdownContext = React.createContext({
  getToggleProps: noop,
  getMenuProps: noop,
  getItemProps: noop,
})

export class Dropdown extends React.Component<IDropdownProps> {
  static displayName = 'xbrick.Dropdown'
  static defaultProps = {
    tag: 'div',
    navItem: false,
    btnGroup: false,
  }

  public state = { open: false }

  public componentDidMount() {
    window.addEventListener('click', this.handleGlobalClick)
  }

  public componentWillUnmount() {
    window.removeEventListener('click', this.handleGlobalClick)
  }

  private handleGlobalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    try {
      if (!dom.contains(target)) {
        this.close()
      }
    } catch (e) {/**/}
  }

  private toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  private close = () => {
    const { open } = this.state
    open && this.setState({ open: false })
  }

  private getToggleProps = (props: IDropdownToggleProps) => {
    const { onClick } = props
    return { ...props, onClick: mergeCall(this.toggle, onClick) }
  }

  private getMenuProps = (props: IDropdownMenuProps) => {
    return { ...props, open: this.state.open, direction: this.props.direction }
  }

  private getItemProps = (props: IDropdownItemProps) => {
    const { header, disabled, onClick } = props
    return { ...props, onClick: mergeCall(!header && !disabled && this.close, onClick) }
  }

  render () {
    const { tag, navItem, btnGroup, direction = '', ...others } = this.props
    const Tag = tag === 'div' && navItem ? 'li' : tag!
    const className = classNames(
      this.props.className,
      btnGroup ? classes.BUTTON_GROUP : classes.DROPDOWN,
      {
        [classes[`DROP${direction.toUpperCase()}`]]: !!direction,
        [classes.NAV_ITEM]: !!navItem,
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
