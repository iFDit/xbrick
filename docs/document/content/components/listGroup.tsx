import React from 'react'
import { Row, Col, Badge } from 'xbrick'
import { ListGroup, ListGroupItem } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/list-group/basic.md'
import active from 'docs/demo/list-group/active-item.md'
import disabled from 'docs/demo/list-group/disabled-item.md'
import hover from 'docs/demo/list-group/hover-item.md'
import buttons from 'docs/demo/list-group/buttons.md'
import flush from 'docs/demo/list-group/flush.md'
import bstype from 'docs/demo/list-group/bstype.md'
import badge from 'docs/demo/list-group/with-badge.md'
import custom from 'docs/demo/list-group/custom.md'

// API
import api from 'src/list-group/list-group.md'
import itemapi from 'src/list-group/list-group-item.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function ListGroupContent() {
  return new Content('List Group')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Active items', anchor: 'active-items' })
    .addNav({ text: 'Disabled items', anchor: 'disabled-items' })
    .addNav({ text: 'Links', anchor: 'links' })
    .addNav({ text: 'Buttons', anchor: 'buttons' })
    .addNav({ text: 'Flush', anchor: 'flush' })
    .addNav({ text: 'Contextual classes', anchor: 'contextual-classes' })
    .addNav({ text: 'With badges', anchor: 'with-badges' })
    .addNav({ text: 'Custom content', anchor: 'custom-content' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>ListGroup组件通常用来展示大量的项目，例如：产品列表。</p>
          <p>使用：</p>
          <ul>
            <li>有多个相似的数据类型需要展示（例如图片和文本），可以使用列表。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>当一个List里面需要展示的内容超过3行，考虑使用Card展示。</li>
            <li>展示的内容主要是图片，考虑使用网格列表。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>简单的无序列表，可以根据不同的需求进行扩展。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Active items',
      describe: <p>ListGroupItem组件有active属性，设置为true时会高亮ListGroupItem。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem active>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(active)),
    })
    .addSection({
      title: 'Disabled items',
      describe: <p>设置disabled属性，可以展示禁用效果的ListGroupItem。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem disabled>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(disabled)),
    })
    .addSection({
      title: 'Links',
      describe: <p>渲染为{`<a>`}元素的ListGroupItem。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem tag="a" href="#" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(hover)),
    })
    .addSection({
      title: 'Buttons',
      describe: <p>渲染为{`<button>`}元素的ListGroupItem。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem tag="button" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(buttons)),
    })
    .addSection({
      title: 'Flush',
      describe: <p>显示无边框的Listgroup。</p>,
      content: (
        <ListGroup flush style={{width: '100%'}}>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(flush)),
    })
    .addSection({
      title: 'Contextual classes',
      describe: <p>通过color属性可以快捷的设置ListGroupItem背景颜色。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem tag="a" href="#" color="primary">Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="secondary">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="warning">Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="success">Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="danger">Vestibulum at eros</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="info">Vestibulum at eros</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="light">Vestibulum at eros</ListGroupItem>
          <ListGroupItem tag="a" href="#" color="dark">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(bstype)),
    })
    .addSection({
      title: 'With badges',
      describe: <p>结合Layout组件和Badge组件显示徽标。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem>
            <Row xs={{justify: 'between'}}>
              <Col>Cras justo odio</Col>
              <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row xs={{justify: 'between'}}>
              <Col>Dapibus ac facilisis in</Col>
              <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row xs={{justify: 'between'}}>
              <Col>Morbi leo risus</Col>
              <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(badge)),
    })
    .addSection({
      title: 'Custom content',
      describe: <p>ListGroupItem中可以展示自定义的组件和内容。</p>,
      content: (
        <ListGroup style={{width: '100%'}}>
          <ListGroupItem tag="a" href="#" action active>
            <Row xs={{justify: 'between'}}>
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </Row>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            <Row xs={{justify: 'between'}}>
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </Row>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action>
            <Row xs={{justify: 'between'}}>
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </Row>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
        </ListGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(custom)),
    })
    .addAPI({
      header: true,
      title: 'ListGroup',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'ListGroupItem',
      content: getTableFromString(converter.makeHtml(itemapi)),
    })
    .render()
}