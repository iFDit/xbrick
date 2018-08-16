import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Button } from 'xbrick'
import { Popover, PopoverBody, PopoverHeader } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/popover/basic.md'
import directions from 'docs/demo/popover/directions.md'
import dismiss from 'docs/demo/popover/dismiss.md'
import triggers from 'docs/demo/popover/triggers.md'

// API
import api from 'src/popover/popover.md'
import bodyapi from 'src/popover/popover-body.md'
import headerapi from 'src/popover/popover-header.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function PopoverContent() {
  return new Content('Popover')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Directions', anchor: 'directions' })
    .addNav({ text: 'Dismiss on next click', anchor: 'dismiss-on-next-click' })
    .addNav({ text: 'Different triggers', anchor: 'different-triggers' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Popover组件可以在指定元素附近展示气泡式的浮层，常用于轻量级的操作，例如：表格行操作确认删除。</p>
          <p>使用：</p>
          <ul>
            <li>需要与用户进行交互，并且不希望阻塞工作流，可以考虑使用Popover。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Examples />
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Directions',
      describe: '',
      content: (
        <Directions/>
      ),
      codeText: getCodeFromString(converter.makeHtml(directions)),
    })
    .addSection({
      title: 'Dismiss on next click',
      describe: '',
      content: (
        <Dismiss/>
      ),
      codeText: getCodeFromString(converter.makeHtml(dismiss)),
    })
    .addSection({
      title: 'Different triggers',
      describe: '',
      content: (
        <Triggers/>
      ),
      codeText: getCodeFromString(converter.makeHtml(triggers)),
    })
    .addAPI({
      header: true,
      title: 'Popover',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'PopoverHeader',
      content: getTableFromString(converter.makeHtml(headerapi)),
    })
    .addAPI({
      title: 'PopoverBody',
      content: getTableFromString(converter.makeHtml(bodyapi)),
    })
    .render()
}

class Examples extends React.Component {
  public state = { open: false }
  public renderPopoverContent = () => {
    return (
      <>
        <PopoverHeader>
          Popover Header
        </PopoverHeader>
        <PopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </PopoverBody>
      </>
    )
  }
  public toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }
  render () {
    return (
      <Popover open={this.state.open} content={this.renderPopoverContent()}>
        <Button bstype="secondary" onClick={this.toggle}>Toggle Popover</Button>
      </Popover>
    )
  }
}

class Directions extends React.Component {
  public state = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  }
  public renderPopoverContent = () => {
    return (
      <>
        <PopoverHeader>
          Popover Header
        </PopoverHeader>
        <PopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </PopoverBody>
      </>
    )
  }

  public toggle = (direction: string) => () => {
    const open = this.state[direction]
    this.setState({ [direction]: !open })
  }

  render () {
    return (
      <>
        <Col xs="auto">
          <Popover open={this.state.top} content={this.renderPopoverContent()} placement="top">
            <Button bstype="secondary" onClick={this.toggle('top')}>Popover on top</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.bottom} content={this.renderPopoverContent()} placement="bottom">
            <Button bstype="secondary" onClick={this.toggle('bottom')}>Popover on bottom</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.left} content={this.renderPopoverContent()} placement="left">
            <Button bstype="secondary" onClick={this.toggle('left')}>Popover on left</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.right} content={this.renderPopoverContent()} placement="right">
            <Button bstype="secondary" onClick={this.toggle('right')}>Popover on right</Button>
          </Popover>
        </Col>
      </>
    )
  }
}

class Dismiss extends Examples {
  public componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }
  public handleClick = (evt: any) => {
    const { target } = evt
    if (!ReactDOM.findDOMNode(this)!.contains(target)) {
      this.setState({ open: false })
    }
  }

  render () {
    return (
      <Popover open={this.state.open} content={this.renderPopoverContent()}>
        <Button bstype="secondary" onClick={this.toggle}>Dismissible popover</Button>
      </Popover>
    )
  }
}

class Triggers extends React.Component {

  public state = {
    hover: false,
    focus: false,
    click: false,
  }

  public element: any

  public componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    this.element = dom
    if (this.element) {
      this.element.addEventListener('mouseenter', this.handleMouseenter)
      this.element.addEventListener('mouseleave', this.handleMouseleave)
    }
  }
  public componentWillUnmount() {
    if (this.element) {
      this.element.removeEventListener('mouseenter', this.handleMouseenter)
      this.element.removeEventListener('mouseleave', this.handleMouseleave)
    }
  }

  public toggle = (ways: string) => () => {
    const open = this.state[ways]
    this.setState({ [ways]: !open })
  }

  public handleMouseenter = (evt: any) => {
    this.setState({ hover: true })
  }

  public handleMouseleave = (evt: any) => {
    setTimeout(() => this.setState({ hover: false }), 100)
  }

  public renderPopoverContent = () => {
    return (
      <>
        <PopoverHeader>
          Popover Header
        </PopoverHeader>
        <PopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </PopoverBody>
      </>
    )
  }

  render () {
    return (
      <>
        <Col xs="auto" className="handle-hover">
          <Popover open={this.state.hover} content={this.renderPopoverContent()}>
            <Button bstype="secondary">Toggle Popover</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.focus} content={this.renderPopoverContent()}>
            <Button bstype="secondary" onFocus={this.toggle('focus')} onBlur={this.toggle('focus')}>Toggle Popover</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.click} content={this.renderPopoverContent()}>
            <Button bstype="secondary" onClick={this.toggle('click')}>Toggle Popover</Button>
          </Popover>
        </Col>
      </>
    )
  }
}
