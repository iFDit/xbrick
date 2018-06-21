import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
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
   * trigger after animate done.
   */
  after? (): void
}

const omitProps = ['from', 'to', 'after']

export class CarouselTrack extends React.Component<ICarouselTrackProps> {
  static displayName = 'xbrick.CarouselTrack'
  static defaultProps = { tag: 'div', from: 0, to: 0 }

  public state = {
    items: [],
  }

  public componentDidMount() {
    const trackDOM: Element = ReactDOM.findDOMNode(this) as Element
    const items = toArray(trackDOM.querySelector('.carousel-track')!.childNodes).filter(Boolean)

    this.setState({ items: items })
  }

  render() {
    const { tag, children, className, ...others } = this.props
    const Tag = tag!
    const childs = React.Children.map(
      children,
      (child: React.ReactNode) => child,
    ) || []
    const renderChild = childs.length > 1 ? [last(childs), ...childs, first(childs)] : childs
    const { start, end } = this.calculateStyle()
    const from = { left: -start }
    const to = { left: -end }

    return (
      <Tag {...omit(others, omitProps)} className={classNames(className, classes.CAROUSEL_VIEW)}>
        <Animate from={from} to={to} show={true} className={classes.CAROUSEL_TRACK}>
          {renderChild.map((child, idx) => React.cloneElement(child as React.ReactElement<any>, {key: idx}))}
        </Animate>
      </Tag>
    )
  }

  private calculateStyle = () => {
    const { from, to } = this.props
    const { items } = this.state
    const startleft = this.getWidthFromArray(items.slice(0, from! + 1))
    const endleft = this.getWidthFromArray(items.slice(0, to! + 1))
    console.log(startleft)
    return { start: startleft, end: endleft }
  }

  private getWidthFromArray(items: any[]) {
    return items.reduce((prev, next) => prev + get(next, 'offsetWidth', 0), 0)
  }
}
