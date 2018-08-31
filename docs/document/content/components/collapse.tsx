import React from 'react'
import { Col, Button, Card, CardHeader, CardBody } from 'xbrick'
import { Collapse, UncontrolledCollapse } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/collapse/basic.md'
import accordion from 'docs/demo/collapse/accordion.md'
import uncontrolled from 'docs/demo/collapse/uncontrolled.md'

// API
import api from 'src/collapse/collapse.md'
import uncontrolledApi from 'src/collapse/uncontrolled-collapse.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

class Example extends React.Component {
  public state = { open: true }

  public toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render () {
    return (
      <>
        <Button className="mb-2" onClick={() => this.toggle()}>Toggle</Button>
        <Collapse
          open={this.state.open}
          style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 4, padding: 10}}
        >
          <p>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </Collapse>
      </>
    )
  }
}

class Accordion extends React.Component {
  public state = {
    first: true,
    second: false,
    last: false,
  }

  public toggle = (key: string) => {
    const last = this.state[key]
    this.setState({
      first: false,
      second: false,
      last: false,
      [key]: !last,
    })
  }

  render () {
    return (
      <div className="accordion">
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('first')
          }}>Collapsible Group Item #1</a></CardHeader>
          <Collapse open={this.state.first}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('second')
          }}>Collapsible Group Item #2</a></CardHeader>
          <Collapse open={this.state.second}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('last')
          }}>Collapsible Group Item #3</a></CardHeader>
          <Collapse open={this.state.last}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export function CollapseContent() {
  return new Content('Collapse')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Example', anchor: 'example' })
    .addNav({ text: 'Accordion', anchor: 'accordion' })
    .addNav({ text: 'Uncontrolled', anchor: 'uncontrolled' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Collapse组件能够创建一个可折叠的面板，针对一些复杂的内容，通过折叠能够展示相对简洁的界面。</p>
          <p>使用：</p>
          <ul>
            <li>展示一些配置项，用户能够清晰的了解可以配置的内容。</li>
            <li>在一个小的空间内展示更多的内容时，可以使用Collapse组件。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>需要展示文章或者大块内容的时候，应该使用格式良好的文本替代。</li>
            <li>没有很多内容的时候，不需要使用折叠面板。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Example',
      describe: <p>通过open控制Collapse组件的展开和折叠。</p>,
      content: (
        <Col>
          <Example/>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Accordion',
      describe: <p>手风琴，每次只展开一个Collapse。</p>,
      content: (
        <Col>
          <Accordion/>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(accordion)),
    })
    .addSection({
      title: 'Uncontrolled',
      describe: <p>非受控组件，通过toggle函数切换展开/折叠状态。</p>,
      content: (
        <Col>
          <UncontrolledCollapse defaultOpen={true}>
            {({ toggle }) => (
              <p onClick={() => toggle()}>some text in here, and can be hidden by click me.</p>
            )}
          </UncontrolledCollapse>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(uncontrolled)),
    })
    .addAPI({
      header: true,
      title: 'Collapse',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'Uncontrolled',
      content: getTableFromString(converter.makeHtml(uncontrolledApi)),
    })
    .render()
}