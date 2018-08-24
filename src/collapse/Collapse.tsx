import React from 'react'
import { isFunction } from 'lodash'
import { IProps } from 'src/common/props'
import { Slide } from 'src/animate/Slide'
import { UncontrolledSlide } from 'src/animate/UncontrolledSlide'

export interface ICollapseProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Set the Collapse hide/show.
   */
  open?: boolean

  /**
   * Handler invoked after the Collapse was hidden/showed.
   */
  afterAnimate?(): void
}

export class Collapse extends React.Component<ICollapseProps> {
  static displayName = 'xbrick.Collapse'
  static defaultProps = {
    tag: 'div',
    open: false,
  }

  static getDerivedStateFromProps(props: ICollapseProps, state: any) {
    const { lastOpen } = state
    const { open } = props
    if (open !== lastOpen) {
      return { ...state, lastOpen: open, active: true }
    }
    return null
  }

  public state = {
    lastOpen: this.props.open,
    active: false,
  }

  public handleAnimateEnd = () => {
    const { afterAnimate } = this.props
    this.setState({ active: false })
    afterAnimate && afterAnimate()
  }

  render () {
    const { afterAnimate, open, children, ...others } = this.props
    const child = isFunction(children) ? children : () => children
    return (
      this.state.active
        ? <Slide {...others} afterStateChange={this.handleAnimateEnd} open={open} children={child}/>
        : <UncontrolledSlide {...others} afterStateChange={this.handleAnimateEnd} defaultOpen={open} children={child}/>
    )
  }
}
