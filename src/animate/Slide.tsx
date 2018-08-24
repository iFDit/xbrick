import React from 'react'
import { SlideDown } from 'src/animate/SlideDown'
import { SlideUp } from 'src/animate/SlideUp'
import { IProps } from 'src/common/props'
import { isFunction } from 'lodash'

export interface ISlideProps extends IProps {
  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * control component show/hide.
   */
  open?: boolean | null | undefined

  /**
   * render props.
   * @param props 
   */
  children?(): React.ReactNode
}

export class Slide extends React.Component<ISlideProps> {
  static displayName = 'xbrick.Slide'
  static defaultProps = {
    open: false,
    tag: 'div',
  }

  render() {
    const { children, open, ...others } = this.props
    const RenderComponent = open ? SlideDown : SlideUp
    const child = isFunction(children) ? children() : children
    return (
      <RenderComponent {...others} active={true}>
        {() => child}
      </RenderComponent>
    )
  }
}