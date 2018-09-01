import React from 'react'
import { Col } from 'xbrick'
import { Pagination, PageItem, PageLink, PageIndicator } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/pagination/basic.md'
import indicator from 'docs/demo/pagination/indicator.md'
import size from 'docs/demo/pagination/size.md'
import alignment from 'docs/demo/pagination/alignment.md'

// API
import api from 'src/pagination/pagination.md'
import linkapi from 'src/pagination/page-link.md'
import indicatorapi from 'src/pagination/page-indicator.md'
import itemapi from 'src/pagination/page-item.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function PaginationContent() {
  return new Content('Pagination')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Indicator', anchor: 'indicator' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'Alignment', anchor: 'alignment' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Pagination组件可以展示分页，用于浏览分页数据，例如：表格</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>简单可扩展的分页组件。</p>,
      content: (
        <Pagination>
          <PageItem><PageLink href="#">Previous</PageLink></PageItem>
          <PageItem><PageLink href="#">1</PageLink></PageItem>
          <PageItem><PageLink href="#">2</PageLink></PageItem>
          <PageItem><PageLink href="#">3</PageLink></PageItem>
          <PageItem><PageLink href="#">4</PageLink></PageItem>
          <PageItem><PageLink href="#">Next</PageLink></PageItem>
        </Pagination>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Indicator',
      describe: <p>可以使用PageIndicator来展示不同的翻页标识。</p>,
      content: (
        <Pagination>
          <PageIndicator direction="prev"/>
          <PageItem><PageLink href="#">1</PageLink></PageItem>
          <PageItem><PageLink href="#">2</PageLink></PageItem>
          <PageItem><PageLink href="#">3</PageLink></PageItem>
          <PageItem><PageLink href="#">4</PageLink></PageItem>
          <PageIndicator direction="next"/>
        </Pagination>
      ),
      codeText: getCodeFromString(converter.makeHtml(indicator)),
    })
    .addSection({
      title: 'Sizing',
      describe: <p>通过size属性来修改Pagination组件的大小。</p>,
      content: (
        <>
          <Col xs="12">
            <Pagination size="large">
              <PageItem><PageLink href="#">Previous</PageLink></PageItem>
              <PageItem><PageLink href="#">1</PageLink></PageItem>
              <PageItem><PageLink href="#">2</PageLink></PageItem>
              <PageItem><PageLink href="#">3</PageLink></PageItem>
              <PageItem><PageLink href="#">4</PageLink></PageItem>
              <PageItem><PageLink href="#">Next</PageLink></PageItem>
            </Pagination>
          </Col>
          <Col xs="12">
            <Pagination size="small">
              <PageItem><PageLink href="#">Previous</PageLink></PageItem>
              <PageItem><PageLink href="#">1</PageLink></PageItem>
              <PageItem><PageLink href="#">2</PageLink></PageItem>
              <PageItem><PageLink href="#">3</PageLink></PageItem>
              <PageItem><PageLink href="#">4</PageLink></PageItem>
              <PageItem><PageLink href="#">Next</PageLink></PageItem>
            </Pagination>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Alignment',
      describe: <p>通过justify属性修改Pagenation组件的水平布局。</p>,
      content: (
        <>
          <Col xs="12">
            <Pagination>
              <PageItem><PageLink href="#">Previous</PageLink></PageItem>
              <PageItem><PageLink href="#">1</PageLink></PageItem>
              <PageItem><PageLink href="#">2</PageLink></PageItem>
              <PageItem><PageLink href="#">3</PageLink></PageItem>
              <PageItem><PageLink href="#">4</PageLink></PageItem>
              <PageItem><PageLink href="#">Next</PageLink></PageItem>
            </Pagination>
          </Col>
          <Col xs="12">
            <Pagination justify="center">
              <PageItem><PageLink href="#">Previous</PageLink></PageItem>
              <PageItem><PageLink href="#">1</PageLink></PageItem>
              <PageItem><PageLink href="#">2</PageLink></PageItem>
              <PageItem><PageLink href="#">3</PageLink></PageItem>
              <PageItem><PageLink href="#">4</PageLink></PageItem>
              <PageItem><PageLink href="#">Next</PageLink></PageItem>
            </Pagination>
          </Col>
          <Col xs="12">
            <Pagination justify="end">
              <PageItem><PageLink href="#">Previous</PageLink></PageItem>
              <PageItem><PageLink href="#">1</PageLink></PageItem>
              <PageItem><PageLink href="#">2</PageLink></PageItem>
              <PageItem><PageLink href="#">3</PageLink></PageItem>
              <PageItem><PageLink href="#">4</PageLink></PageItem>
              <PageItem><PageLink href="#">Next</PageLink></PageItem>
            </Pagination>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(alignment)),
    })
    .addAPI({
      header: true,
      title: 'Pagination',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'pageItem',
      content: getTableFromString(converter.makeHtml(itemapi)),
    })
    .addAPI({
      title: 'pageLink',
      content: getTableFromString(converter.makeHtml(linkapi)),
    })
    .addAPI({
      title: 'pageIndicator',
      content: getTableFromString(converter.makeHtml(indicatorapi)),
    })
    .render()
}