import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { get, omit, first, last, toArray, includes, isFunction } from 'lodash'
import { IProps } from 'src/common/props'
import { Animate } from 'src/animate/Animate'

export interface ICarouselProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * trigger before carousel item changed.
   * @param {number} from  - the current item.
   * @param {number} to    - will active item.
   */
  beforeChange? (from: number, to: number): void

  /**
   * trigger after carousel item changed.
   * @param {number} current 
   */
  afterChange? (current: number): void

  /**
   * Automatically round.
   * @default false
   */
  autoplay?: boolean
}

const controlTyps = ['xbrick.CarouselIndicators', 'xbrick.CarouselControl']
const omitProps = ['autoplay', 'afterChange', 'beforeChange']
export const Carousel: React.StatelessComponent<ICarouselProps> = function (props: ICarouselProps) {
  const { tag, children, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CAROUSEL)
  const controls: any[] = []
  const childs: any[] = []
  // Distinguish between control components and normal components.
  React.Children.forEach(children, (child) => {
    const name = get(child, 'type.displayName')
    if (isFunction(get(child, 'type')) && includes(controlTyps, name)) {
      controls.push(child)
    } else {
      childs.push(child)
    }
  })

  return (
    <Tag {...omit(others, omitProps)} className={className}>
      <div className={classes.CAROUSEL_VIEW}>
        <Track>
          {childs}
        </Track>
      </div>
      {controls}
    </Tag>
  )
}

interface ITrackProps extends IProps {
  /**
   * Animate slide item from.
   * @default 1
   */
  from?: number

  /**
   * Animate slide item to.
   * @default 1
   */
  to?: number

  /**
   * trigger after animate done.
   */
  after? (): void
}

class Track extends React.Component<ITrackProps> {
  static displayName = 'xbrick.Track'
  static defaultProps = { from: 1, to: 1 }

  public state = {
    items: []
  }

  public componentDidMount() {
    const trackDOM = ReactDOM.findDOMNode(this)
    const items = toArray(trackDOM!.childNodes).filter(Boolean)
    this.setState({ items: items })
  }

  render() {
    const { children } = this.props
    const childs = React.Children.map(
      children,
      (child: React.ReactNode) => (
        <div className={classes.CAROUSEL_ITEM}>
          {child}
        </div>
      ),
    ) || []
    const renderChild = childs.length > 1 ? [last(childs), ...childs, first(childs)] : childs
    const { start, end } = this.calculateStyle()
    const from = { left: -start }
    const to = { left: -end }

    return (
      <Animate from={from} to={to} show={true} className={classes.CAROUSEL_TRACK}>
        {renderChild.map((child, i) => React.cloneElement(child!, {key: i}))}
      </Animate>
    )
  }

  private calculateStyle = () => {
    const { from, to } = this.props
    const { items } = this.state
    const startleft = this.getWidthFromArray(items.slice(0, from))
    const endleft = this.getWidthFromArray(items.slice(0, to))
    return { start: startleft, end: endleft }
  }

  private getWidthFromArray(items: any[]) {
    return items.reduce((prev, next) => prev + get(next, 'offsetWidth', 0), 0)
  }
}

Carousel.displayName = 'xbrick.Carousel'
Carousel.defaultProps = {
  tag: 'div',
  autoplay: false,
}
