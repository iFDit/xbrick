import React from 'react'
import { Col } from 'xbrick'
import { Breadcrumb, BreadcrumbItem } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import badgeBase from 'docs/demo/breadcrumb/basic.md'

// API
import api from 'src/breadcrumbs/breadcrumb.md'
import itemApi from 'src/breadcrumbs/breadcrumb-item.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function DropdownContent() {
  return new Content('Dropdown')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Dropdown组件通常用来简化设计，对用户只展示被选中的内容，当用户点击下拉时可以看到所有的选项。</p>
          <p>使用：</p>
          <ul>
            <li>在一个表单中需要展示7-15个可选项的时候，应该使用Dropdown。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>当可选项过多的时候, 例如：超过100项(选择国家), 应该用auto-complete。</li>
            <li>当选项过少的时候, 可以考虑用radio展示所有的信息。</li>
          </ul>
        </Col>
      ),
    })
    .render()
}
