import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { Animate } from 'src/animate/Animate'
import { get, first, last, toArray } from 'lodash'
import { CAROUSEL_VIEW, CAROUSEL_TRACK } from 'src/common/classes'

export interface ICarouselTrackProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Animate slide item from.
   * @default 0
   */
  from?: number

  /**
   * Animate slide item to.
   * @default 0
   */
  to?: number

  /**
   * Animate opacity only.
   * @default false
   */
  crossfade?: boolean

  /**
   * trigger after animate done.
   */
  afterChange? (): void
}

const defaultConfig = {precision: 0.01, stiffness: 100, damping: 64}

export class CarouselTrack extends React.Component<ICarouselTrackProps> {
  static displayName = 'xbrick.CarouselTrack'
  static defaultProps = { tag: 'div', from: 0, to: 0, crossfade: false }

  public state = {
    items: [],
  }

  private timer: NodeJS.Timer | null = null
  private lastHandle: any = null

  public componentDidMount() {
    const trackDOM: Element = ReactDOM.findDOMNode(this) as Element
    const items = this.getBound(toArray(trackDOM.querySelector('.carousel-track')!.childNodes).filter(Boolean) as HTMLElement[])
    this.lastHandle = window.onresize
    window.onresize = () => {
      this.handleResize(this.getBound(toArray(trackDOM.querySelector('.carousel-track')!.childNodes).filter(Boolean) as HTMLElement[]))
      this.lastHandle && this.lastHandle()
    }
    this.setState({ items: items })
  }

  public componentWillUnmount() {
    window.onresize = this.lastHandle
  }

  render() {
    const { tag, to: propTo, from: propFrom, children, className, crossfade, afterChange, ...others } = this.props
    const Tag = tag!
    const slide = propTo !== propFrom
    const childs = React.Children.map(
      children,
      (child: React.ReactNode) => child,
    ) || []
    const renderChild = childs.length > 1 ? [last(childs), ...childs, first(childs)] : childs
    const { start, end } = this.calculateStyle()
    const from = {
      left: {value: -start, transition: !crossfade},
      opacity: {value: slide ? 0.5 : 1, transition: !!crossfade, config: defaultConfig},
    }
    const to = {left: -end, opacity: 1}
    return (
      <Tag {...others} className={classNames(className, CAROUSEL_VIEW)}>
        <Animate from={from} to={to} show={true} className={CAROUSEL_TRACK} afterStateChange={(afterChange)}>
          {renderChild.map((child, idx) => React.cloneElement(child as React.ReactElement<any>, {key: idx}))}
        </Animate>
      </Tag>
    )
  }

  private getBound(elems: HTMLElement[]) {
    return elems.map(item => ({
      width: get(item, 'offsetWidth', 0),
      height: get(item, 'offsetHeight', 0),
    }))
  }

  private handleResize = (newItems: any[]) => {
    if (this.timer) {
      clearTimeout(this.timer!)
      this.timer = null
    }
    this.timer = setTimeout(() => this.setState({ items: newItems }), 50)
  }

  private calculateStyle = () => {
    const { from, to } = this.props
    const { items } = this.state
    const startleft = this.getWidthFromArray(items.slice(0, +from! + 1))
    const endleft = this.getWidthFromArray(items.slice(0, +to! + 1))
    return { start: startleft, end: endleft }
  }

  private getWidthFromArray(items: any[]) {
    return items.reduce((prev, next) => prev + get(next, 'width', 0), 0)
  }
}
