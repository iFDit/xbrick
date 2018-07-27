import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { get, omit } from 'lodash'
import { getcss } from 'src/common/util'
import { IAnimateProps, Animate } from 'src/animate/Animate'

export interface ISlideupProps extends IAnimateProps {
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

export class SlideUp extends React.Component<ISlideupProps> {

  static getDerivedStateFromProps(props: ISlideupProps, state: any) {
    const active = get(props, 'active', props.defaultActive)
    if (active !== state.active) {
      return { ...state, active }
    }
    return state
  }

  public state = { active: !!get(this.props, 'active', this.props.defaultActive), styles: {} }

  public static displayName = 'xbrick.SlideUp'

  public static defaultProps = {
    defaultActive: false,
    trigger: 'active',
    tag: 'div',
    from: {},
    style: {},
    to: {
      height: 0,
      opacity: 0,
      marginTop: 0,
      paddingTop: 0,
      marginBottom: 0,
      paddingBottom: 0,
    },
  }

  public createFrom = () => {
    const { styles } = this.state
    const {height, marginBottom, marginTop, paddingTop, paddingBottom} = styles as any
    const heightConfig = {precision: 35, stiffness: 270, damping: 24 }
    const opacityConfig = {precision: 0.5}
    const opacity = {opacity: { value: 1, config: opacityConfig }}
    return height > 0 && !isNaN(height) ?
      {
        ...opacity,
        height: { value: height, config: heightConfig},
        marginBottom: { value: marginBottom, config: { precision: 10 } },
        marginTop: { value: marginTop, config: { precision: 10 } },
        paddingTop: { value: paddingTop, config: { precision: 10 } },
        paddingBottom: { value: paddingBottom, config: { precision: 10 } },
      }
      : opacity
  }

  public slideup = () => {
    if (this.props.active == null) {
      const overflow = 'hidden'
      const dom = ReactDOM.findDOMNode(this) as HTMLElement
      const { height } = dom ? dom.getBoundingClientRect() : {height: 0}
      this.setState({
        active: true,
        styles: {
          height,
          overflow,
          marginTop: getcss(dom, 'margin-top', 0),
          paddingTop: getcss(dom, 'padding-top', 0),
          marginBottom: getcss(dom, 'margin-bottom', 0),
          paddingBottom: getcss(dom, 'padding-bottom', 0),
        },
      })
    }
  }

  public afterClose = () => {
    const { afterStateChange } = this.props
    const { styles } = this.state
    const finalStyle = { ...styles, display: 'none' }
    this.setState({styles: finalStyle}, () => {
      afterStateChange && afterStateChange()
    })
  }

  render() {
    const { children, style, ...others } = this.props
    const { active, styles } = this.state
    const nextstyle = { ...style, ...styles }
    const nextProps = Object.assign(
      { active },
      omit(others, omitProps),
      {
        trigger: 'active',
        from: close ? this.createFrom() : {},
        to: SlideUp.defaultProps.to,
        afterStateChange: this.afterClose,
      },
    )

    return (
      <Animate {...nextProps} style={nextstyle}>
        {children && children(this.slideup)}
      </Animate>
    )
  }
}