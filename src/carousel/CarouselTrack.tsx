import React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { get, omit, first, last, toArray } from 'lodash'
import { Animate } from 'src/animate/Animate'

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

const omitProps = ['from', 'to']
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
    if (!this.lastHandle) {
      this.lastHandle = window.onresize
    }
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
    const { tag, children, className, crossfade, afterChange, ...others } = this.props
    const Tag = tag!
    const childs = React.Children.map(
      children,
      (child: React.ReactNode) => child,
    ) || []
    const renderChild = childs.length > 1 ? [last(childs), ...childs, first(childs)] : childs
    const { start, end } = this.calculateStyle()
    const from = {
      left: {value: -start, transition: !crossfade},
      opacity: {value: 0.5, transition: !!crossfade, config: defaultConfig},
    }
    const to = {left: -end, opacity: 1 }

    return (
      <Tag {...omit(others, omitProps)} className={classNames(className, classes.CAROUSEL_VIEW)}>
        <Animate from={from} to={to} show={true} className={classes.CAROUSEL_TRACK} afterStateChange={afterChange}>
          {renderChild.map((child, idx) => React.cloneElement(child as React.ReactElement<any>, {key: idx}))}
        </Animate>
      </Tag>
    )
  }

  private getBound(elems: HTMLElement[]) {
    return elems.map(item => ({ width: get(item, 'offsetWidth', 0), height: get(item, 'offsetHeight', 0) }))
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
