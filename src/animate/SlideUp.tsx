import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IAnimateProps, Animate } from 'src/animate/Animate'
import { getSlideUpToStyle, getSlideUpFromStyle } from 'src/animate/util'

export interface ISlideupProps extends IAnimateProps {
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

// Controlled Component.
export class SlideUp extends React.Component<ISlideupProps> {
  static displayName = 'xbrick.SlideUp'
  static defaultProps = {
    tag: 'div',
  }

  public state = {
    from: {},
    to: {},
  }

  public componentDidMount() {
    const from = getSlideUpFromStyle(ReactDOM.findDOMNode(this) as HTMLElement, true)
    const to = getSlideUpToStyle()
    this.setState({ from, to })
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