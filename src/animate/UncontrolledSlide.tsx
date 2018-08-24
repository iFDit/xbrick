import React from 'react'
import { UncontrolledSlideDown } from 'src/animate/UncontrolledSlideDown'
import { UncontrolledSlideUp } from 'src/animate/UncontrolledSlideUp'
import { IProps } from 'src/common/props'

export interface IUncontrolledSlideProps extends IProps {
  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * initial hidden or showed(uncontrol component).
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Handle invoked afer state change.
   */
  afterStateChange? (show: boolean): void

  /**
   * render props.
   * @param props 
   */
  children?(props: {slidedown: any, slideup: any, toggle: any}): React.ReactNode
}

export class UncontrolledSlide extends React.Component<IUncontrolledSlideProps> {
  static displayName = 'xbrick.UncontrolledSlide'
  static defaultProps = {
    tag: 'div',
    defaultOpen: false,
  }

  public state = {
    open: this.props.defaultOpen,
  }

  public afterAnimate = () => {
    const { afterStateChange } = this.props
    const { open } = this.state
    afterStateChange && afterStateChange(!open)
    this.setState({ open: !open })
  }

  render () {
    // @ts-ignore
    // shortcut of ignore defaultOpen and afterStateChange.
    const {children, defaultOpen, afterStateChange, ...others } = this.props
    const { open } = this.state
    const initStyle = open ? {} : { display: 'none' }
    const noop = () => {/**/}
    const RenderComponent = open ? UncontrolledSlideUp : UncontrolledSlideDown

    return (
      <RenderComponent {...others} afterStateChange={this.afterAnimate} initStyle={initStyle}>
        {(slideFn) => children && children({
          toggle: slideFn,
          slidedown: open ? noop : slideFn,
          slideup: open ? slideFn : noop,
        })}
      </RenderComponent>
    )
  }
}