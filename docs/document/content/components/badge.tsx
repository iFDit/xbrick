import React from 'react'
import classNames from 'classnames'
import { Col } from 'xbrick'
import { Button, Badge, BadgeStyles } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import badgeBase from 'docs/demo/badge/basic.md'
import conter from 'docs/demo/badge/counter.md'
import contextualVariations from 'docs/demo/badge/contextual-variations.md'
import pill from 'docs/demo/badge/pill.md'
import link from 'docs/demo/badge/link.md'

// Style
import style from 'src/badge/badge-styles.md'

// API
import api from 'src/badge/badge.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const { BADGE, PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK, PILL } = BadgeStyles

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
            <h1>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h1>
          </Col>
          <Col xs="12">
            <h2>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h2>
          </Col>
          <Col xs="12">
            <h3>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h3>
          </Col>
          <Col xs="12">
            <h4>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h4>
          </Col>
          <Col xs="12">
            <h5>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h5>
          </Col>
          <Col xs="12">
            <h6>Example heading <Badge className={classNames(BADGE, SECONDARY)}>New</Badge></h6>
          </Col>
          <Col xs="12">
            <Button>Notifications<Badge className={classNames(BADGE, SECONDARY)}>4</Badge></Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(badgeBase)),
    })
    .addSection({
      title: 'Counter',
      describe: <p>Badge可以使用在Button组件中，提供计数的功能。</p>,
      content: (
        <Button>Messages<Badge className={classNames(BADGE, LIGHT)}>8</Badge></Button>
      ),
      codeText: getCodeFromString(converter.makeHtml(conter)),
    })
    .addSection({
      title: 'Contextual variations',
      describe: <p>可以通过BadgeStyles提供不同的样式</p>,
      content: (
        <>
          <Badge className={classNames(BADGE, PRIMARY, 'mr-2')}>primary</Badge>
          <Badge className={classNames(BADGE, SECONDARY, 'mr-2')}>Secondary</Badge>
          <Badge className={classNames(BADGE, WARNING, 'mr-2')}>Warning</Badge>
          <Badge className={classNames(BADGE, SUCCESS, 'mr-2')}>Success</Badge>
          <Badge className={classNames(BADGE, DANGER, 'mr-2')}>Danger</Badge>
          <Badge className={classNames(BADGE, INFO, 'mr-2')}>Info</Badge>
          <Badge className={classNames(BADGE, LIGHT, 'mr-2')}>Light</Badge>
          <Badge className={classNames(BADGE, DARK, 'mr-2')}>Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(contextualVariations)),
    })
    .addSection({
      title: 'Pill badges',
      describe: <p>PILL能够让Badge显示圆角效果。</p>,
      content: (
        <>
          <Badge className={classNames(BADGE, PRIMARY, PILL, 'mr-2')}>primary</Badge>
          <Badge className={classNames(BADGE, SECONDARY, PILL, 'mr-2')}>Secondary</Badge>
          <Badge className={classNames(BADGE, WARNING, PILL, 'mr-2')}>Warning</Badge>
          <Badge className={classNames(BADGE, SUCCESS, PILL, 'mr-2')}>Success</Badge>
          <Badge className={classNames(BADGE, DANGER, PILL, 'mr-2')}>Danger</Badge>
          <Badge className={classNames(BADGE, INFO, PILL, 'mr-2')}>Info</Badge>
          <Badge className={classNames(BADGE, LIGHT, PILL, 'mr-2')}>Light</Badge>
          <Badge className={classNames(BADGE, DARK, PILL, 'mr-2')}>Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(pill)),
    })
    .addSection({
      title: 'Links',
      describe: <p>Badge使用tag="a"，能够生成hover效果的徽标。</p>,
      content: (
        <>
          <Badge className={classNames(BADGE, PRIMARY, 'mr-2')} tag="a" href="#" onClick={prevent}>primary</Badge>
          <Badge className={classNames(BADGE, SECONDARY, 'mr-2')} tag="a" href="#" onClick={prevent}>Secondary</Badge>
          <Badge className={classNames(BADGE, WARNING, 'mr-2')} tag="a" href="#" onClick={prevent}>Warning</Badge>
          <Badge className={classNames(BADGE, SUCCESS, 'mr-2')} tag="a" href="#" onClick={prevent}>Success</Badge>
          <Badge className={classNames(BADGE, DANGER, 'mr-2')} tag="a" href="#" onClick={prevent}>Danger</Badge>
          <Badge className={classNames(BADGE, INFO, 'mr-2')} tag="a" href="#" onClick={prevent}>Info</Badge>
          <Badge className={classNames(BADGE, LIGHT, 'mr-2')} tag="a" href="#" onClick={prevent}>Light</Badge>
          <Badge className={classNames(BADGE, DARK, 'mr-2')} tag="a" href="#" onClick={prevent}>Dark</Badge>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(link)),
    })
    .addStyles({
      header: true,
      title: 'Badge styles',
      content: getTableFromString(converter.makeHtml(style)),
    })
    .addAPI({
      header: true,
      title: 'Badge',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .render()
}
