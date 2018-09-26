import React, { createContext } from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { mergeCall } from 'src/common/util'
import { NavbarToggler, INavbarTogglerProps } from 'src/navbar/NavbarToggler'
import { NAVBAR, STICKY, NAVBAR_DARK, NAVBAR_LIGHT } from 'src/common/classes'
import { NavbarCollapse, INavbarCollapseProps } from 'src/navbar/NavbarCollapse'
import { IProps, NavbarExpand, NavbarJustify, NavbarBgColor, NavbarFixed } from 'src/common/props'


export interface INavbarProps extends IProps {
  /**
   * custom render component.
   * @default nav
   */
  tag?: string | React.Factory<any>

  /**
   * set navbar expand min width.
   * @default xs
   */
  expand?: NavbarExpand

  /**
   * set nav justify.
   */
  justify?: NavbarJustify

  /**
   * set navbar background color.
   * @default light
   */
  color?: NavbarBgColor

  /**
   * reverse font color.
   * @default false
   */
  reverse?: boolean

  /**
   * fixed top or fixed bottom.
   */
  fixed?: NavbarFixed

  /**
   * set navbar sticky top.
   * @default false
   */
  sticky?: boolean
}

export const NavbarContext = createContext({
  getTogglerProps: (props: INavbarTogglerProps = {}) => props,
  getCollapseProps: (props: INavbarCollapseProps = {}) => props,
})

export class Navbar extends React.Component<INavbarProps> {
  static displayName = 'xbrick.Navbar'
  static defaultProps = {
    tag: 'nav',
    expand: 'xs',
    color: 'light',
    reverse: false,
    sticky: false,
  }
  static Collapse = (props: INavbarCollapseProps) => (
    <NavbarContext.Consumer>
      {({getCollapseProps}) => <NavbarCollapse {...getCollapseProps(props)}/>}
    </NavbarContext.Consumer>
  )
  static Toggler = (props: INavbarTogglerProps) => (
    <NavbarContext.Consumer>
      {({getTogglerProps}) => <NavbarToggler {...getTogglerProps(props)}/>}
    </NavbarContext.Consumer>
  )
  static navbarClass({className, fixed, justify, reverse, expand, sticky, color}: any) {
    return classNames(
      className,
      NAVBAR,
      cls[`BG_${color!.toUpperCase()}`],
      cls[`NAVBAR_EXPAND_${expand!.toUpperCase()}`],
      reverse ? NAVBAR_DARK : NAVBAR_LIGHT,
      {
        [STICKY]: !!sticky,
        [cls[`FIXED_${String(fixed).toUpperCase()}`]]: !!fixed,
        [cls[`JUSTIFY_CONTENT_XS_${String(justify).toUpperCase()}`]]: !!justify,
      },
    )
  }

  public state = {
    expand: true,
  }

  public getTogglerProps = (props: any = {}) => {
    const { onClick } = props
    return { ...props, onClick: mergeCall(this.handleToggleExpand, onClick)}
  }

  public getCollapseProps = (props: any = {}) => {
    const { expand } = this.state
    return { ...props, open: expand }
  }

  private handleToggleExpand = () => {
    const {expand} = this.state
    this.setState({ expand: !expand })
  }

  render () {
    const { tag, expand, fixed, sticky, justify, color, reverse, className, ...others } = this.props
    const Tag = tag!
    const classes = Navbar.navbarClass({className, fixed, justify, reverse, expand, sticky, color})
    return (
      <NavbarContext.Provider value={{
        getTogglerProps: this.getTogglerProps,
        getCollapseProps: this.getCollapseProps,
      }}>
        <Tag {...others} className={classes} />
      </NavbarContext.Provider>
    )
  }
}

export const NavbarStyles = {
  nav: 'navbar-nav',
}
