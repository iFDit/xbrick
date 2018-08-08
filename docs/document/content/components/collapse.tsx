import React from 'react'
import { Col, Button } from 'xbrick'
import { Collapse } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/carousel/basic.md'
import control from 'docs/demo/carousel/control.md'
import indicators from 'docs/demo/carousel/indicators.md'
import captions from 'docs/demo/carousel/captions.md'
import crossfade from 'docs/demo/carousel/crossfade.md'

// API
import api from 'src/carousel/carousel.md'
import uncontrolledCarouselApi from 'src/carousel/uncontrolled-carousel.md'
import trackApi from 'src/carousel/carousel-track.md'
import itemApi from 'src/carousel/carousel-item.md'
import indicatorsApi from 'src/carousel/carousel-indicators.md'
import controlApi from 'src/carousel/carousel-control.md'
import captionApi from 'src/carousel/carousel-caption.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

class Example extends React.Component {
  public state = { defaultOpen: true, open: null }

  public toggle = () => {
    const { defaultOpen, open } = this.state
    this.setState({ open: !(open == null ? defaultOpen : open) })
  }

  public afterAnimate = () => {
    const { open } = this.state
    this.setState({ open: null, defaultOpen: open })
  }

  render () {
    return (
      <>
        <Button className="mb-2" onClick={() => this.toggle()}>Toggle</Button>
        <Collapse
          afterAnimate={this.afterAnimate}
          defaultOpen={this.state.defaultOpen}
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
      describe: '',
      content: (
        <Col>
          <Example/>
        </Col>
      ),
    })
    .render()
}