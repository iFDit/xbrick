import React from 'react'
import { Container, Row, Col } from 'xbrick'
import { Button, Badge } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/layout/basic.md'
import colwidth from 'docs/demo/layout/col-width.md'
import vertical from 'docs/demo/layout/vertical-alignment.md'
import horizontal from 'docs/demo/layout/horizontal-alignment.md'
import gutters from 'docs/demo/layout/no-gutters.md'
import order from 'docs/demo/layout/order.md'
import offset from 'docs/demo/layout/offset.md'

// API
import api from 'src/layout/container.md'
import row from 'src/layout/row.md'
import col from 'src/layout/col.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function LayoutContent() {
  return new Content('Layout')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Setting one column width', anchor: 'setting-one-column-width' })
    .addNav({ text: 'Vertical alignment', anchor: 'vertical-alignment' })
    .addNav({ text: 'Horizontal alignment', anchor: 'horizontal-alignment' })
    .addNav({ text: 'No gutters', anchor: 'no-gutters' })
    .addNav({ text: 'Order', anchor: 'order' })
    .addNav({ text: 'Offset', anchor: 'offset' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>布局使用Bootstrap的网格布局系统。</p>
          <p>原理：</p>
          <ul>
            <li>
              采用容器，行和列来布局和对齐内容，其中行和列是采用<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a>构建的自适应系统。
            </li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Setting one column width',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row>
            <Col xs>1 of 2</Col>
            <Col xs>2 of 2</Col>
          </Row>
          <Row>
            <Col xs>1 of 3</Col>
            <Col xs>2 of 3</Col>
            <Col xs>3 of 3</Col>
          </Row>
          <Row>
            <Col xs>1 of 3</Col>
            <Col xs="6">2 of 3(wider-6)</Col>
            <Col xs>3 of 3</Col>
          </Row>
          <Row>
            <Col xs>1 of 3</Col>
            <Col xs="5">2 of 3(wider-5)</Col>
            <Col xs>3 of 3</Col>
          </Row>
          <Row>
            <Col xs lg="2">1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">3 of 3</Col>
          </Row>
          <Row>
            <Col xs>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">3 of 3</Col>
          </Row>
          <Row>
            <Col xs>col</Col>
            <Col xs>col</Col>
            <Col xs>col</Col>
            <Col xs>col</Col>
          </Row>
          <Row>
            <Col xs="8">col-8</Col>
            <Col xs="4">col-4</Col>
          </Row>
          <Row>
            <Col sm="8">col-sm-8</Col>
            <Col sm="4">col-sm-4</Col>
          </Row>
          <Row>
            <Col sm>col-sm</Col>
            <Col sm>col-sm</Col>
            <Col sm>col-sm</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(colwidth)),
    })
    .addSection({
      title: 'Vertical alignment',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row xs={{ align: 'start' }} style={{height: '10rem', backgroundColor: '#eee'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
          </Row>
          <Row xs={{ align: 'center' }} style={{height: '10rem', backgroundColor: '#eee'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
          </Row>
          <Row xs={{ align: 'end' }} style={{height: '10rem', backgroundColor: '#eee'}}>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
            <Col>One of three columns</Col>
          </Row>
          <Row style={{height: '10rem', backgroundColor: '#eee'}}>
            <Col xs={{ align: 'start' }}>One of three columns</Col>
            <Col xs={{ align: 'center' }}>One of three columns</Col>
            <Col xs={{ align: 'end' }}>One of three columns</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(vertical)),
    })
    .addSection({
      title: 'Horizontal alignment',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row xs={{ justify: 'start' }}>
            <Col xs={{col: 4}}>One of three columns</Col>
            <Col xs={{col: 4}}>One of three columns</Col>
          </Row>
          <Row xs={{ justify: 'center' }}>
            <Col xs={{col: 4}}>One of three columns</Col>
            <Col xs={{col: 4}}>One of three columns</Col>
          </Row>
          <Row xs={{ justify: 'end' }}>
            <Col xs={{col: 4}}>One of three columns</Col>
            <Col xs={{col: 4}}>One of three columns</Col>
          </Row>
          <Row xs={{ justify: 'around' }}>
            <Col xs={{col: 4}}>One of three columns</Col>
            <Col xs={{col: 4}}>One of three columns</Col>
          </Row>
          <Row xs={{ justify: 'between' }}>
            <Col xs={{col: 4}}>One of three columns</Col>
            <Col xs={{col: 4}}>One of three columns</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(horizontal)),
    })
    .addSection({
      title: 'No gutters',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row noGutter>
            <Col xs="12" sm="6" md="8">.col-12 .col-sm-6 .col-md-8</Col>
            <Col xs="6" md="4">.col-6 .col-md-4</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(gutters)),
    })
    .addSection({
      title: 'Order',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row>
            <Col xs>First, but unordered</Col>
            <Col xs={{ order: 12, col: 0 }}>Second, but last</Col>
            <Col xs={{ order: 1, col: 0 }}>Third, but first</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(order)),
    })
    .addSection({
      title: 'Offset',
      describe: '',
      content: (
        <Container className="doc-layout-example-container">
          <Row>
            <Col md="4">col-md-4</Col>
            <Col md={{ col: 4, offset: 3 }}>col-md-4 offset-3</Col>
          </Row>
        </Container>
      ),
      codeText: getCodeFromString(converter.makeHtml(offset)),
    })
    .addAPI({
      header: true,
      title: 'Container',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'Row',
      content: getTableFromString(converter.makeHtml(row)),
    })
    .addAPI({
      title: 'Col',
      content: getTableFromString(converter.makeHtml(col)),
    })
    .render()
}
