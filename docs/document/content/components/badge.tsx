import React from 'react'
import { Col } from 'xbrick'
import { Button, Badge } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import badgeBase from 'docs/demo/badge/basic.md'
import contextualVariations from 'docs/demo/badge/contextual-variations.md'
import pill from 'docs/demo/badge/pill.md'
import link from 'docs/demo/badge/link.md'

// API
import api from 'src/badge/badge.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function BadgeContent() {
  return new Content('Badge 徽标')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Contextual variations', anchor: 'contextual-variations' })
    .addNav({ text: 'Pill badges', anchor: 'pill-badges' })
    .addNav({ text: 'Links', anchor: 'Links' })
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
      describe: '',
      content: (
        <>
          <Col xs="12">
            <h1>Example heading <Badge bstype="secondary">New</Badge></h1>
          </Col>
          <Col xs="12">
            <h2>Example heading <Badge bstype="secondary">New</Badge></h2>
          </Col>
          <Col xs="12">
            <h3>Example heading <Badge bstype="secondary">New</Badge></h3>
          </Col>
          <Col xs="12">
            <h4>Example heading <Badge bstype="secondary">New</Badge></h4>
          </Col>
          <Col xs="12">
            <h5>Example heading <Badge bstype="secondary">New</Badge></h5>
          </Col>
          <Col xs="12">
            <h6>Example heading <Badge bstype="secondary">New</Badge></h6>
          </Col>
          <Col xs="12">
            <Button>Notifications<Badge bstype="light">4</Badge></Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(badgeBase)),
    })
    .addSection({
      title: 'Contextual variations',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Badge bstype="primary">primary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="secondary">Secondary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="warning">Warning</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="success">Success</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="danger">Danger</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="info">Info</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="light">Light</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="dark">Dark</Badge>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(contextualVariations)),
    })
    .addSection({
      title: 'Pill badges',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Badge bstype="primary" pill>primary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="secondary" pill>Secondary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="warning" pill>Warning</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="success" pill>Success</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="danger" pill>Danger</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="info" pill>Info</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="light" pill>Light</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="dark" pill>Dark</Badge>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(pill)),
    })
    .addSection({
      title: 'Links',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Badge bstype="primary" link>primary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="secondary" link>Secondary</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="warning" link>Warning</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="success" link>Success</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="danger" link>Danger</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="info" link>Info</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="light" link>Light</Badge>
          </Col>
          <Col xs="auto">
            <Badge bstype="dark" link>Dark</Badge>
          </Col>
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
