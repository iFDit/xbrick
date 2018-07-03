import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { getcss } from 'src/common/util'
import { IAnimateProps, Animate } from 'src/animate/Animate'

export interface ISlideDownProps extends IAnimateProps {
  children?(fn: (...args: any[]) => void): React.ReactNode
}

export class SlideDown extends React.Component<ISlideDownProps> {

  public state = { show: false, styles: {}, from: {} }

  public static displayName = 'xbrick.SlideDown'

  public static defaultProps = {
    trigger: 'show',
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
        height: { value: 0, config: { precision: 5 } },
        marginBottom: { value: 0, config: { precision: 2 } },
        marginTop: { value: 0, config: { precision: 2 } },
        opacity: { value: 0, config: { precision: 0.3 } },
        paddingBottom: { value: 0, config: { precision: 2 } },
        paddingTop: { value: 0, config: { precision: 2 } },
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
    this.setState({ show: true })
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
    const { show, from, styles } = this.state
    const nextstyle = { ...style, overflow: 'hidden' }
    const nextProps = Object.assign(
      { show },
      others,
      {
        from,
        trigger: 'show',
        to: show ? styles : {},
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
