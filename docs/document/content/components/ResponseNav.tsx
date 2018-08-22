import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { toArray } from 'lodash'
import { Animate, Nav } from 'xbrick'

export interface IResponseNav {
  [propsName: string]: any
}

export class ResponseNav extends React.Component<IResponseNav> {

  public state = {
    response: false,
    from: 0,
    to: 0,
    start: true,
    end: false,
  }

  public componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  public handleResize = () => {
    const { domWidth, contentWidth } = this.getWidth()
    this.setState({
      response: contentWidth > domWidth,
    })
  }

  public getWidth = () => {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    const track = dom.querySelector('.fix-header-nav-track-wrap') as HTMLElement
    const items = toArray(dom.querySelectorAll('.nav-item')) as HTMLElement[]
    const domWidth = track ? track.offsetWidth : dom.offsetWidth
    const contentWidth = items.reduce((pre, next: HTMLElement) => pre + next.offsetWidth, 0)

    return {
      dom,
      items,
      domWidth,
      contentWidth,
    }
  }

  public getPrevMove = () => {
    const { to } = this.state
    const { domWidth } = this.getWidth()
    const move = Math.abs(to) > domWidth ? to + domWidth : 0

    return {
      move,
      start: move === 0,
    }
  }

  public getNextMove = () => {
    const { to } = this.state
    const { items, domWidth, contentWidth } = this.getWidth()
    let currentWidth = 0
    let offset = 0
    for (let i = 0; i < items.length; i += 1) {
      currentWidth += items[i].offsetWidth
      if (currentWidth + to > domWidth) {
        offset = currentWidth + to - domWidth
        break
      }
    }

    const wantMove = currentWidth - contentWidth - offset
    const end = Math.abs(wantMove) < domWidth
    const move = end ? wantMove : -domWidth 
    return {
      move,
      end,
    }
  }

  public handlePrev = () => {
    const { to, start } = this.state
    if (!start) {
      const { move, start: nextStart } = this.getPrevMove()
      this.setState({
        from: to,
        to: move,
        start: nextStart,
        end: false,
      })
    }
  }

  public handleNext = () => {
    const { to, end } = this.state
    if (!end) {
      const { move, end: nextEnd } = this.getNextMove()
      this.setState({
        from: to,
        to: move + to,
        start: false,
        end: nextEnd,
      })
    }
  }

  public getFrom = () => {
    return {
      translateX: this.state.from,
    }
  }

  public getTo = () => {
    return {
      translateX: this.state.to,
    }
  }

  render () {
    const { start, end, response } = this.state
    const className = classNames(this.props.className, 'fix-header-nav')
    const preClassName = classNames('prev-nav-btn', {disabled: start})
    const nextClassName = classNames('next-nav-btn', {disabled: end})
    return response ? (
      <div className="fix-header-nav-wrap">
        <span className={preClassName} onClick={this.handlePrev}>{`<`}</span>
        <div className="fix-header-nav-track-wrap">
          <Animate from={this.getFrom()} to={this.getTo()} show={true}>
            <Nav {...this.props} className={className}/>
          </Animate>
        </div>
        <span className={nextClassName} onClick={this.handleNext}>{`>`}</span>
      </div>
    ) : <Nav {...this.props} className={className}/>
  }
}
