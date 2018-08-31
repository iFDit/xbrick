import React from 'react'
import { Container, Col } from 'xbrick'
import { Jumbotron } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/jumbotron/basic.md'
import fluid from 'docs/demo/jumbotron/fluid.md'

// API
import api from 'src/jumbotron/jumbotron.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function JumbotronContent() {
  return new Content('Jumbotron')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Fluid', anchor: 'fluid' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Jumbotron组件类似一个大横幅，通常在主页的顶部用于展示一些概要信息。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Jumbotron>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </Jumbotron>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Fluid',
      describe: '',
      content: (
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      ),
      codeText: getCodeFromString(converter.makeHtml(fluid)),
    })
    .addAPI({
      header: true,
      title: 'Jumbotron',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .render()
}