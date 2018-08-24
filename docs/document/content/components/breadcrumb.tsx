import React from 'react'
import { Col } from 'xbrick'
import { Breadcrumb, BreadcrumbItem, BreadcrumbStyles, BreadcrumbItemStyles } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import badgeBase from 'docs/demo/breadcrumb/basic.md'

// Style
import style from 'src/breadcrumbs/breadcrumb-styles.md'
import itemstyle from 'src/breadcrumbs/breadcrumb-item-styles.md'

// API
import api from 'src/breadcrumbs/breadcrumb.md'
import itemApi from 'src/breadcrumbs/breadcrumb-item.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const { ITEM, ACTIVE } = BreadcrumbItemStyles
const prevent = (e: any) => e.preventDefault()
export function BreadcrumbContent() {
  return new Content('Breadcrumb')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Breadcrumb组件可以指明当前页面在导航结构中的位置，可以帮助用户理解当前页面与其他页面的关系，同时也可以方便的返回上一层级。</p>
          <p>使用：</p>
          <ul>
            <li>将面包屑导航放在页面的顶部，或者页面主要内容之上。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>不要将面包屑导航作为浏览页面的主要方式。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Col xs="12">
          <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
            <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
            <BreadcrumbItem className={`${ITEM}`}><a href="#" onClick={prevent}>Home</a></BreadcrumbItem>
            <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
            <BreadcrumbItem className={`${ITEM}`}><a href="#" onClick={prevent}>Home</a></BreadcrumbItem>
            <BreadcrumbItem className={`${ITEM}`}><a href="#" onClick={prevent}>Library</a></BreadcrumbItem>
            <BreadcrumbItem className={`${ITEM}`}><a href="#" onClick={prevent}>Data</a></BreadcrumbItem>
            <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Current</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(badgeBase)),
    })
    .addStyles({
      header: true,
      title: 'Breadcrumb',
      content: getTableFromString(converter.makeHtml(style)),
    })
    .addStyles({
      title: 'BreadcrumbItem',
      content: getTableFromString(converter.makeHtml(itemstyle)),
    })
    .addAPI({
      header: true,
      title: 'Breadcrumb',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'BreadcrumbItem',
      content: getTableFromString(converter.makeHtml(itemApi)),
    })
    .render()
}