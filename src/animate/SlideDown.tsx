import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { get, omit } from 'lodash'
import { getcss } from 'src/common/util'
import { IAnimateProps, Animate } from 'src/animate/Animate'

export interface ISlideDownProps extends IAnimateProps {
  /**
   * initial active state(uncontrol component).
   * @default false
   */
  defaultActive?: boolean

  /**
   * start animate(control component).
   */
  active?: boolean

  /**
   * render props.
   * @param fn 
   */
  children?(fn: (...args: any[]) => void): React.ReactNode
}

const omitProps = ['defaultActive', 'active']

export class SlideDown extends React.Component<ISlideDownProps> {

  static getDerivedStateFromProps(props: ISlideDownProps, state: any) {
    const active = get(props, 'active', props.defaultActive)
    if (active !== state.active) {
      return { ...state, active }
    }
    return state
  }

  public state = { active: !!get(this.props, 'active', this.props.defaultActive), styles: {}, from: {} }

  public static displayName = 'xbrick.SlideDown'

  public static defaultProps = {
    defaultActive: false,
    trigger: 'active',
    tag: 'div',
    from: {},
    style: {},
    to: {},
  }

  public componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    const { height } = dom ? dom.getBoundingClientRect() : {height: 0}
    this.setState({
      from: {
        height: { value: 0, config: { precision: 35, stiffness: 270, damping: 24 } },
        marginBottom: { value: 0, config: { precision: 10 } },
        marginTop: { value: 0, config: { precision: 10 } },
        opacity: { value: 0, config: { precision: 0.5 } },
        paddingBottom: { value: 0, config: { precision: 10 } },
        paddingTop: { value: 0, config: { precision: 10 } },
      },
      styles: {
        height,
        opacity: 1,
        marginTop: getcss(dom, 'margin-top', 0),
        paddingTop: getcss(dom, 'padding-top', 0),
        marginBottom: getcss(dom, 'margin-bottom', 0),
        paddingBottom: getcss(dom, 'padding-bottom', 0),
      },
    })
  }

  public createTo = () => {
    return this.state.styles
  }

  public slidedown = () => {
    if (this.props.active == null) {
      this.setState({ active: true })
    }
  }

  public afterClose = () => {
    const { afterStateChange } = this.props
    const { styles } = this.state
    const finalStyle = { ...styles }
    this.setState({styles: finalStyle}, () => {
      afterStateChange && afterStateChange()
    })
  }

  render() {
    const { children, style, ...others } = this.props
    const { active, from, styles } = this.state
    const nextstyle = { ...style, overflow: 'hidden' }
    const nextProps = Object.assign(
      { active },
      omit(others, omitProps),
      {
        from,
        trigger: 'active',
        to: active ? styles : {},
        afterStateChange: this.afterClose,
      },
    )

    return (
      <Animate {...nextProps} style={nextstyle}>
        {children && children(this.slidedown)}
      </Animate>
    )
  }
}
