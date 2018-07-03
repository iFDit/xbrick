import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { getcss } from 'src/common/util'
import { IAnimateProps, Animate } from 'src/animate/Animate'

export interface ISlideupProps extends IAnimateProps {
  children?(fn: (...args: any[]) => void): React.ReactNode
}

export class SlideUp extends React.Component<ISlideupProps> {

  public state = { close: false, styles: {} }

  public static displayName = 'xbrick.SlideUp'

  public static defaultProps = {
    trigger: 'close',
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
    const heightConfig = {precision: 5}
    const opacityConfig = {precision: 0.3}
    const opacity = {opacity: { value: 1, config: opacityConfig }}
    return height > 0 && !isNaN(height) ?
      {
        ...opacity,
        height: { value: height, config: heightConfig},
        marginBottom,
        marginTop,
        paddingTop,
        paddingBottom,
      }
      : opacity
  }

  public slideup = () => {
    const overflow = 'hidden'
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    const { height } = dom ? dom.getBoundingClientRect() : {height: 0}
    this.setState({
      close: true,
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
    const { close, styles } = this.state
    const nextstyle = { ...style, ...styles }
    const nextProps = Object.assign(
      { close },
      others,
      {
        trigger: 'close',
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