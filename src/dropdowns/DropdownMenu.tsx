import React from 'react'
import classNames from 'classnames'
import { get } from 'lodash'
import { Animate } from 'src/animate/Animate'
import { IProps, Direction } from 'src/common/props'
import { MENU, MENU_UP, MENU_LEFT, ACTIVE, DROPDOWN_MENU } from 'src/common/classes'

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

export class DropdownMenu extends React.Component<IDropdownMenuProps> {
  static displayName = 'xbrick.DropdownMenu'
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
    // const { open } = this.props
    const propName = this.createTranslateName()
    return {
      // opacity: { value: open ? 0.6 : 0.5, config: { precision: 0.4 } },
      [propName]: this.createTranslateFromValue(),
    }
  }

  private getToStyle = () => {
    const { open } = this.props
    const propName = this.createTranslateName()
    return {
      opacity: open ? 0.9 : 0,
      [propName]: open ? 1 : 0,
    }
  }

  private createTranslateName = () => {
    const { direction } = this.props
    return direction === 'right' || direction === 'left' ? 'scaleX' : 'scaleY'
  }

  private createTranslateFromValue = () => {
    const { direction } = this.props
    const noAnimate = direction === 'left' || direction === 'right'
    return {
      value: open ?  0.8 : 0.1,
      config: { precision: 0.5, stiffness: 350 },
      transition: !!get(this.props, 'transition', !noAnimate && open),
    }
  }

  render () {
    // @ts-ignore
    // shortcut of ignore some props.
    const { right, open, afterAnimate, direction, transition, ...others } = this.props
    const { active } = this.state
    const Tag = this.props.tag!
    const styles = { ...(this.props.style || {}) }
    const className = classNames(
      this.props.className,
      MENU,
      DROPDOWN_MENU,
      {
        [`${DROPDOWN_MENU}-right`]: right,
        [MENU_LEFT]: direction === 'left',
        [MENU_UP]: direction === 'up',
        [ACTIVE]: active && !open,
      },
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
