import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { get } from 'lodash'
import { IProps, Direction } from 'src/common/props'
import { Animate } from 'src/animate/Animate'
import { DropdownContext } from 'src/dropdowns/Dropdown'

export interface IDropdownMenuProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * if true that will set menu alignment to the right.
   * @default false
   */
  right?: boolean

  /**
   * set Menu open or hidden.
   * @default false
   */
  open?: boolean

  /**
   * Handler invoked after the Collapse was hidden/showed.
   */
  afterAnimate?(): void

  /**
   * without animation.
   */
  transition?: boolean

  /**
   * set the dropdown menu direction variations, the options is
   * 'up', 'left', 'right'.
   * use for animate.
   */
  direction?: Direction
}

class Menu extends React.Component<IDropdownMenuProps> {
  static displayName = 'xbrick.Menu'
  static defaultProps = {
    tag: 'div',
    right: false,
    open: false,
  }
  static getDerivedStateFromProps(props: IDropdownMenuProps, state: any) {
    const { lastOpen } = state
    if (lastOpen !== props.open) {
      return { ...state, lastOpen: props.open, active: true }
    }
    return null
  }

  public state = {
    lastOpen: this.props.open,
    active: false,
  }

  private handleAnimateEnd = () => {
    const { afterAnimate } = this.props
    this.setState({ active: false })
    afterAnimate && afterAnimate()
  }

  private getFromStyle = () => {
    const { open } = this.props
    const propName = this.createTranslateName()
    return {
      opacity: { value: open ? 0.3 : 0.4, config: { precision: 0.4 } },
      [propName]: this.createTranslateFromValue(),
    }
  }

  private getToStyle = () => {
    const { open } = this.props
    const propName = this.createTranslateName()
    return {
      opacity: open ? 0.9 : 0,
      [propName]: 0,
    }
  }

  private createTranslateName = () => {
    const { direction } = this.props
    return direction === 'right' || direction === 'left' ? 'translateX' : 'translateY'
  }

  private createTranslateFromValue = () => {
    const { open, direction } = this.props
    const offset = direction === 'up' || direction === 'left' ? 8 : -8
    return {
      value: open ? offset : 0,
      config: { precision: 6 },
      transition: get(this.props, 'transition', open),
    }
  }

  render () {
    // @ts-ignore
    // shortcut of ignore some props.
    const { right, open, afterAnimate, transition, ...others } = this.props
    const { active } = this.state
    const Tag = this.props.tag!
    const styles = { ...(this.props.style || {}) }
    const className = classNames(
      this.props.className,
      classes.MENU,
      classes.DROPDOWN_MENU,
      {[`${classes.DROPDOWN_MENU}-right`]: right},
    )
    if (!open) {
      styles.display = 'none'
    }

    return active ? 
      (
        <Animate
          {...others}
          from={this.getFromStyle()}
          to={this.getToStyle()}
          show={true}
          transition={transition}
          className={className}
          afterStateChange={this.handleAnimateEnd}
        />
      ) : <Tag {...others} className={className} style={styles}/>
  }
}

export const DropdownMenu: React.StatelessComponent<IDropdownMenuProps> = (props: IDropdownMenuProps) => (
  <DropdownContext.Consumer>
    {({getMenuProps}) => <Menu {...getMenuProps(props)}/>}
  </DropdownContext.Consumer>
)

DropdownMenu.displayName = 'xbrick.DropdownMenu'