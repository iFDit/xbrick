import React from 'react'
import classNames from 'classnames'
import { Col } from 'xbrick'
import { Button, Badge } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import badgeBase from 'docs/demo/badge/basic.md'
import conter from 'docs/demo/badge/counter.md'
import contextualVariations from 'docs/demo/badge/contextual-variations.md'
import pill from 'docs/demo/badge/pill.md'
import link from 'docs/demo/badge/link.md'

// API
import api from 'src/badge/badge.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const prevent = (e: MouseEvent) => e.preventDefault()
export function BadgeContent() {
  return new Content('Badge')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Counter', anchor: 'counter' })
    .addNav({ text: 'Contextual variations', anchor: 'contextual-variations' })
    .addNav({ text: 'Pill badges', anchor: 'pill-badges' })
    .addNav({ text: 'Links', anchor: 'links' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Badge组件通常用于强调一个对象的特征，例如：未读的条目，更新的数量等等。</p>
          <p>使用：</p>
          <ul>
            <li>提示用户当前有哪些未处理的事项。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>Badge中字体的大小可以随着父元素的变化自适应，通过设置百分比的font-size实现。</p>,
      content: (
        <>
          <Col xs="12">
            <h1>Example heading <Badge>New</Badge></h1>
          </Col>
          <Col xs="12">
            <h2>Example heading <Badge color="secondary">New</Badge></h2>
          </Col>
          <Col xs="12">
            <h3>Example heading <Badge color="secondary">New</Badge></h3>
          </Col>
          <Col xs="12">
            <h4>Example heading <Badge color="secondary">New</Badge></h4>
          </Col>
          <Col xs="12">
            <h5>Example heading <Badge color="secondary">New</Badge></h5>
          </Col>
          <Col xs="12">
            <h6>Example heading <Badge color="secondary">New</Badge></h6>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(badgeBase)),
    })
    .addSection({
      title: 'Counter',
      describe: <p>Badge可以使用在Button组件中，提供计数的功能。</p>,
      content: (
        <Button>Messages<Badge color="light" className="ml-2">8</Badge></Button>
      ),
      codeText: getCodeFromString(converter.makeHtml(conter)),
    })
    .addSection({
      title: 'Contextual variations',
      describe: <p>可以通过color设置不同的背景颜色。</p>,
      content: (
        <>
          <Badge className="mr-2">primary</Badge>
          <Badge color="secondary" className="mr-2">Secondary</Badge>
          <Badge color="warning" className="mr-2">Warning</Badge>
          <Badge color="success" className="mr-2">Success</Badge>
          <Badge color="danger" className="mr-2">Danger</Badge>
          <Badge color="info" className="mr-2">Info</Badge>
          <Badge color="light" className="mr-2">Light</Badge>
          <Badge color="dark" className="mr-2">Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(contextualVariations)),
    })
    .addSection({
      title: 'Pill badges',
      describe: <p>Badge显示圆角效果。</p>,
      content: (
        <>
          <Badge className="mr-2" pill>primary</Badge>
          <Badge color="secondary" className="mr-2" pill>Secondary</Badge>
          <Badge color="warning" className="mr-2">Warning</Badge>
          <Badge color="success" className="mr-2">Success</Badge>
          <Badge color="danger" className="mr-2">Danger</Badge>
          <Badge color="info" className="mr-2">Info</Badge>
          <Badge color="light" className="mr-2">Light</Badge>
          <Badge color="dark" className="mr-2">Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(pill)),
    })
    .addSection({
      title: 'Links',
      describe: <p>Badge使用tag="a"，能够生成hover效果的徽标。</p>,
      content: (
        <>
          <Badge className="mr-2" tag="a" href="#" onClick={prevent}>primary</Badge>
          <Badge color="secondary" className="mr-2" tag="a" href="#" onClick={prevent}>Secondary</Badge>
          <Badge color="warning" className="mr-2" tag="a" href="#" onClick={prevent}>Warning</Badge>
          <Badge color="success" className="mr-2" tag="a" href="#" onClick={prevent}>Success</Badge>
          <Badge color="danger" className="mr-2" tag="a" href="#" onClick={prevent}>Danger</Badge>
          <Badge color="info" className="mr-2" tag="a" href="#" onClick={prevent}>Info</Badge>
          <Badge color="light" className="mr-2" tag="a" href="#" onClick={prevent}>Light</Badge>
          <Badge color="dark" className="mr-2" tag="a" href="#" onClick={prevent}>Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(link)),
    })
    .addAPI({
      header: true,
      title: 'Badge',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .render()
}
