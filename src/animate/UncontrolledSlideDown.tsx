import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IAnimateProps, Animate } from 'src/animate/Animate'
import { getSlideDownFromStyle, getSlideDownToStyle } from 'src/animate/util'

export interface IUncontrolledSlideDownProps extends IAnimateProps {
  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * initial active state(uncontrol component).
   * @default false
   */
  defaultActive?: boolean

  /**
   * initial style before animate active.
   * @default {}
   */
  initStyle?: {[props: string]: any}

  /**
   * render props.
   * @param fn 
   */
  children?(fn: (...args: any[]) => void): React.ReactNode
}

export class UncontrolledSlideDown extends React.Component<IUncontrolledSlideDownProps> {
  static displayName = 'xbrick.UncontrolledSlideDown'
  static defaultProps = {
    defaultActive: false,
    trigger: 'active',
    initStyle: {},
    tag: 'div',
  }

  public state = {
    active: this.props.defaultActive,
    dom: null,
  }

  public componentDidMount() {
    this.setState({dom: ReactDOM.findDOMNode(this)})
  }

  public slidedown = () => {
    this.setState({ active: true })
  }

  render() {
    const props = this.props as IUncontrolledSlideDownProps
    // @ts-ignore
    // shortcut of exclude defaultActive prop.
    const { children, style, initStyle, defaultActive, ...others } = props
    const { active, dom } = this.state
    const from = active ? getSlideDownFromStyle() : void 0
    const to = getSlideDownToStyle(dom!, active)
    const nextProps = { ...others, active, from, to }
    const styles = { ...style, ...(active ? {} : initStyle)}
    const className = classNames(
      props.className,
      active && classes.SLIDE_ACTIVE,
    )

    return (
      <Animate {...nextProps} className={className} style={styles}>
        {children && children(this.slidedown)}
      </Animate>
    )
  }
}
