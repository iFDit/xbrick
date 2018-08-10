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

export function ListGroupContent() {
  return new Content('List Group')
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
    .render()
}