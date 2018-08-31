import React from 'react'
import { Col } from 'xbrick'
import { Button, UncontrolledTooltip, Tooltip } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/tooltip/basic.md'
import controlled from 'docs/demo/tooltip/controlled.md'

// API
import api from 'src/tooltip/tooltip.md'
import popperapi from 'src/tooltip/popper.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function TooltipContent() {
  return new Content('Tooltip')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Controlled tooltip', anchor: 'controlled-tooltip' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Tooltip组件可以引导用户，相对于Popover组件较轻量，一般不包括与用户的交互，例如：工具栏Icon图标的提示。</p>
          <p>规范：</p>
          <ul>
            <li>当内容为空的时候，不应该展示tooltip。</li>
            <li>Tooltip组件内部不应该展示复杂的组件，例如表单等等，需要展示复杂内容的可考虑Popover组件。</li>
            <li>当元素隐藏或者disabled时，不应该触发tooltip</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <UncontrolledTooltip content="tooltip on top" placement="top">
              <Button bstype="secondary">Tooltip on top</Button>
            </UncontrolledTooltip>
          </Col>
          <Col xs="auto">
            <UncontrolledTooltip content="tooltip on bottom" placement="bottom">
              <Button bstype="secondary">Tooltip on bottom</Button>
            </UncontrolledTooltip>
          </Col>
          <Col xs="auto">
            <UncontrolledTooltip content="tooltip on left" placement="left">
              <Button bstype="secondary">Tooltip on left</Button>
            </UncontrolledTooltip>
          </Col>
          <Col xs="auto">
            <UncontrolledTooltip content="tooltip on right" placement="right">
              <Button bstype="secondary">Tooltip on right</Button>
            </UncontrolledTooltip>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Controlled tooltip',
      describe: '',
      content: (
        <Examples />
      ),
      codeText: getCodeFromString(converter.makeHtml(controlled)),
    })
    .addAPI({
      header: true,
      title: 'Tooltip',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'Popper',
      content: getTableFromString(converter.makeHtml(popperapi)),
    })
    .render()
}

class Examples extends React.Component {
  public state = { open: false }
  public toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  public handleMouseenter = () => {
    this.setState({ open: true })
  }
  public handleMouseleave = () => {
    this.setState({ open: false })
  }
  render () {
    return (
      <div>
        Somewhere in here is a{` `}
        <Tooltip content="controlled tooltip" placement="right" open={this.state.open}>
          <a href="#" className="target-elem" onMouseEnter={this.handleMouseenter} onMouseLeave={this.handleMouseleave}>tooltip.</a>
        </Tooltip>
      </div>
    )
  }
}
