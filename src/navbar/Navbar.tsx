import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { mergeCall } from 'src/common/util'
import { IProps, NavbarExpand, NavbarJustify, NavbarBgColor, NavbarFixed, INavbarChildrenProps } from 'src/common/props'

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
  bgColor?: NavbarBgColor

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

  /**
   * render props.
   * @param props 
   */
  children? <T>(props: INavbarChildrenProps<T>): React.ReactNode
}

export class Navbar extends React.Component<INavbarProps> {

  static displayName = 'xbrick.Navbar'
  static defaultProps = {
    tag: 'nav',
    expand: 'xs',
    bgColor: 'light',
    reverse: false,
    sticky: false,
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
    return { ...props, expand }
  }

  private handleToggleExpand = () => {
    const {expand} = this.state 
    this.setState({ expand: !expand })
  }

  render () {
    const { tag, expand, fixed, sticky, justify, bgColor, reverse, children, ...others } = this.props
    const Tag = tag!
    const className = classNames(
      this.props.className,
      classes.NAVBAR,
      classes[`BG_${bgColor!.toUpperCase()}`],
      classes[`NAVBAR_EXPAND_${expand!.toUpperCase()}`],
      reverse ? classes.NAVBAR_DARK : classes.NAVBAR_LIGHT,
      {
        [classes.STICKY]: !!sticky,
        [classes[`FIXED_${String(fixed).toUpperCase()}`]]: !!fixed,
        [classes[`JUSTIFY_CONTENT_XS_${String(justify).toUpperCase()}`]]: !!justify,
      },
    )

    return (
      <Tag {...others} className={className}>
        {children && children({
          getTogglerProps: this.getTogglerProps,
          getCollapseProps: this.getCollapseProps,
        })}
      </Tag>
    )
  }
}
