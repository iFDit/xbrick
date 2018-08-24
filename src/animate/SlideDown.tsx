import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IAnimateProps, Animate } from 'src/animate/Animate'
import { getSlideDownFromStyle, getSlideDownToStyle } from 'src/animate/util'

export interface ISlideDownProps extends IAnimateProps {
  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * render props.
   * @param fn 
   */
  children?(): React.ReactNode
}

// Controlled SlideDown
export class SlideDown extends React.Component<ISlideDownProps> {

  static displayName = 'xbrick.SlideDown'
  static defaultProps = {
    tag: 'div',
  }

  public state = {
    from: {},
    to: {},
  }

  public componentDidMount() {
    const from = getSlideDownFromStyle()
    const to = getSlideDownToStyle(ReactDOM.findDOMNode(this) as HTMLElement, true)
    this.setState({ to, from })
  }

  render() {
    const props = this.props
    const { children, ...others } = props
    const from = this.state.from
    const to = this.state.to
    const nextProps = { ...others, from, to }
    const className = classNames(
      props.className,
      props.active && classes.SLIDE_ACTIVE,
    )

    return (
      <Animate {...nextProps} className={className} active={true} trigger="active">
        {children && children()}
      </Animate>
    )
  }
}
