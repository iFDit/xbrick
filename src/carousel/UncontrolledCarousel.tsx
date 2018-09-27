import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { get } from 'lodash'
import { IProps } from 'src/common/props'
import { mergeCall } from 'src/common/util'
import { Carousel } from 'src/carousel/Carousel'
import { CAROUSEL_ITEM } from 'src/common/classes'
import { CarouselTrack, ICarouselTrackProps } from 'src/carousel/CarouselTrack'
import { CarouselControl, ICarouselControlProps } from 'src/carousel/CarouselControl'
import { CarouselIndicators, ICarouselIndicatorProps } from 'src/carousel/CarouselIndicators'

export interface IUncontrolledCarouselProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * the carousel start item.
   * @default 0
   */
  startIndex?: number

  /**
   * Automatically round.
   * @default false
   */
  autoplay?: boolean

  /**
   * trigger after carousel item changed.
   * @param {number} current 
   */
  afterChange? (): void
}

export const CarouselContext = createContext({
  getTrackProps: (props: ICarouselTrackProps = {}) => props,
  getControlProps: (props: ICarouselControlProps = {}) => props,
  getIndicatorsProps: (props: ICarouselIndicatorProps = {}) => props,
})

export class UncontrolledCarousel extends React.Component<IUncontrolledCarouselProps> {
  static displayName = 'xbrick.UncontrolledCarousel'
  static defaultProps = {
    tag: 'div',
    startIndex: 0,
    autoplay: false,
  }
  static Track = (props: ICarouselTrackProps) => (
    <CarouselContext.Consumer>
      {({getTrackProps}) => <CarouselTrack {...getTrackProps(props)}/>}
    </CarouselContext.Consumer>
  )
  static Control = (props: ICarouselControlProps) => (
    <CarouselContext.Consumer>
      {({getControlProps}) => <CarouselControl {...getControlProps(props)}/>}
    </CarouselContext.Consumer>
  )
  static Indicators = (props: ICarouselIndicatorProps) => (
    <CarouselContext.Consumer>
      {({getIndicatorsProps}) => <CarouselIndicators {...getIndicatorsProps(props)}/>}
    </CarouselContext.Consumer>
  )

  public player: any = null

  public state: any = {
    reset: false,
    from: this.props.startIndex,
    to: this.props.startIndex,
    rootDOM: null,
  }

  public autoPlayStart = (time = 5000) => {
    const { autoplay } = this.props
    if (!this.player && autoplay) {
      this.player = setInterval(() => this.handleNext(), time)
    }
  }

  public autoPlayStop = () => {
    if (this.player) {
      clearInterval(this.player)
      this.player = null
    }
  }

  public handleMouseEnter = () => {
    this.autoPlayStop()
  }

  public handleMouseLeave = () => {
    this.autoPlayStart()
  }

  public componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    dom!.addEventListener('mouseenter', this.handleMouseEnter)
    dom!.addEventListener('mouseleave', this.handleMouseLeave)
    this.autoPlayStart()
    const max = this.getMaxCount(dom)
    const to = Math.max(Math.min(this.props.startIndex as number, max), -1)
    const from = Math.min(Math.max(this.props.startIndex as number, -1), max)
    const reset = from === -1 || to === max
    this.setState({ rootDOM: dom, to, from, reset })
  }

  public componentWillUnmount() {
    const { rootDOM } = this.state
    this.autoPlayStop()
    rootDOM!.removeEventListener('mouseenter', this.handleMouseEnter)
    rootDOM!.removeEventListener('mouseleave', this.handleMouseLeave)
  }

  private getMaxCount = (dom?: HTMLElement) => {
    const { rootDOM } = this.state
    const elem = dom || rootDOM
    if (elem) {
      return get(elem.querySelectorAll(`.${CAROUSEL_ITEM}`), 'length', 0) - 2
    } else {
      return 0
    }
  }

  private handlePrev = () => {
    const { to, reset } = this.state
    const max = this.getMaxCount()
    const next = to - 1 >= -1 ? to - 1 : -1
    if (reset) {
      this.setState({
        from: max - 1,
        to: max - 2,
        reset: false,
      })
      return
    }
    this.setState({
      from: to,
      to: next,
      reset: next === -1,
    })
  }

  private handleNext = () => {
    const { to, reset } = this.state
    const max = this.getMaxCount()
    const next = to + 1 >= max ? max : to + 1
    if (reset) {
      this.setState({
        from: 0,
        to: 1,
        reset: false,
      })
      return
    }

    this.setState({
      from: to,
      to: next,
      reset: next === max,
    })
  }

  private getTrackProps = (props: ICarouselTrackProps = {}) => {
    const { afterChange } = this.props
    const { from, to } = this.state
    return { ...props, from, to, afterChange: mergeCall(afterChange, props.afterChange) }
  }

  private getControlProps = (props: ICarouselControlProps = { direction: 'prev' }) => {
    const { onClick, direction } = props
    return { ...props, onClick: mergeCall(direction === 'prev' ? this.handlePrev : this.handleNext, onClick) }
  }

  private getIndicatorsProps = (props: ICarouselIndicatorProps) => {
    const { onItemClick, amount } = props
    const { to } = this.state
    const activeIndex = to === -1 ? +amount! - 1 : to === amount ? 0 : to
    const handleItemClick = (index: number) => {
      this.setState({ from: to, to: index })
    }
    return { ...props, activeIndex, onItemClick: mergeCall(handleItemClick, onItemClick) }
  }

  render () {
    // @ts-ignore
    // shortcut of exclude some props.
    const { startIndex, autoplay, afterChange, children, ...others } = this.props

    return (
      <Carousel {...others}>
        <CarouselContext.Provider value={{
          getTrackProps: this.getTrackProps,
          getControlProps: this.getControlProps,
          getIndicatorsProps: this.getIndicatorsProps,
        }}>
          {children}
        </CarouselContext.Provider>
      </Carousel>
    )
  }
}