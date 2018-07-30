import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classes from 'src/common/classes'
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
      const from = SlideDown.getFromStyle()
      const styles = SlideDown.getToStyle(state.dom)
      return { ...state, from, styles, active }
    }
    return state
  }

  static getFromStyle = () => {
    return {
      height: { value: 0, config: { precision: 35, stiffness: 270, damping: 24 } },
      marginBottom: { value: 0, config: { precision: 10 } },
      marginTop: { value: 0, config: { precision: 10 } },
      opacity: { value: 0, config: { precision: 0.5 } },
      paddingBottom: { value: 0, config: { precision: 10 } },
      paddingTop: { value: 0, config: { precision: 10 } },
    }
  }

  static getToStyle = (dom: HTMLElement) => {
    if (dom) {
      dom.classList.add(classes.ANIMATE_INIT)
      const { height } = dom.getBoundingClientRect ? dom.getBoundingClientRect() : {height: 0}
      return {
        height,
        opacity: 1,
        overflow: 'hidden',
        marginTop: getcss(dom, 'margin-top', 0),
        paddingTop: getcss(dom, 'padding-top', 0),
        marginBottom: getcss(dom, 'margin-bottom', 0),
        paddingBottom: getcss(dom, 'padding-bottom', 0),
      }
    } else {
      return {}
    }
  }

  public state: any = {
    active: !!get(this.props, 'active', this.props.defaultActive),
    styles: {},
    from: {},
  }

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
    this.setState({dom: ReactDOM.findDOMNode(this)})
  }

  public createTo = () => {
    return this.state.styles
  }

  public slidedown = () => {
    if (this.props.active == null) {
      const from = SlideDown.getFromStyle()
      const styles = SlideDown.getToStyle(this.state.dom)
      this.setState({ from, styles, active: true })
    }
  }

  public afterClose = () => {
    const { afterStateChange } = this.props
    // const { styles } = this.state
    // const finalStyle = { ...styles }
    this.setState({active: false}, () => {
      afterStateChange && afterStateChange()
    })
  }

  render() {
    const { children, style, ...others } = this.props
    const { active, from, styles } = this.state
    const nextstyle = { ...style }
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

    if (!active) {
      nextstyle.display = 'none'
    } else {
      nextstyle.overflow = 'hidden'
    }

    return (
      <Animate {...nextProps} style={nextstyle}>
        {children && children(this.slidedown)}
      </Animate>
    )
  }
}
