import React from 'react'
import { IProps } from 'src/common/props'
import { UncontrolledSlide } from 'src/animate/UncontrolledSlide'

export interface IUncontrolledCollapseProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Handler invoked after the Collapse was hidden/showed.
   */
  afterAnimate?(): void

  /**
   * the Collapse default open.
   * @default false 
   */
  defaultOpen?: boolean

  /**
   * render props
   */
  children?: (props: { slideup?: () => void, slidedown?: () => void, toggle?: any}) => React.ReactNode
}

export class UncontrolledCollapse extends React.Component<IUncontrolledCollapseProps> {
  static displayName = 'xbrick.UncontrolledCollapse'
  static defaultProps = {
    tag: 'div',
    defaultOpen: false,
  }

  public state = {
    open: this.props.defaultOpen,
  }

  render () {
    const { afterAnimate, ...others } = this.props
    return <UncontrolledSlide {...others} afterStateChange={afterAnimate}/>
  }
}
