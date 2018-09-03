import React from 'react'
import { Col } from 'xbrick'
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/tables/basic.md'
import full from 'docs/demo/tables/full.md'
import striped from 'docs/demo/tables/striped.md'
import borderless from 'docs/demo/tables/borderless.md'
import hover from 'docs/demo/tables/hover.md'
import size from 'docs/demo/tables/size.md'
import bstype from 'docs/demo/tables/bstype.md'

// API
import api from 'src/table/table.md'
import rowapi from 'src/table/table-row.md'
import cellapi from 'src/table/table-cell.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function TablesContent() {
  return new Content('Tables')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Striped rows', anchor: 'striped-rows' })
    .addNav({ text: 'Full bordered table', anchor: 'full-bordered-table' })
    .addNav({ text: 'Borderless table', anchor: 'borderless-table' })
    .addNav({ text: 'Hoverable rows', anchor: 'hoverable-rows' })
    .addNav({ text: 'Small table', anchor: 'small-table' })
    .addNav({ text: 'Bootstrap type', anchor: 'contextual-classes' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Table组件可以展示数据集，用户可以对其中的数据进行操作。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>简单的表格，通过<code>TableHeader</code>, <code>TableBody</code>, <code>TableRow</code>和<code>TableCell</code>来创建表格。</p>,
      content: (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Striped rows',
      describe: <p>在Table组件中设置striped属性，可以生成条纹样式的行。</p>,
      content: (
        <Table striped>
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(striped)),
    })
    .addSection({
      title: 'Full bordered table',
      describe: <p>设置border="full"使得表格拥有所有边框。</p>,
      content: (
        <Table border="full">
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(full)),
    })
    .addSection({
      title: 'Borderless table',
      describe: <p>设置border="none"来清除表格所有边框。</p>,
      content: (
        <Table border="none">
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(borderless)),
    })
    .addSection({
      title: 'Hoverable rows',
      describe: <p>设置hover属性开启交互式的表格行。</p>,
      content: (
        <Table hover>
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(hover)),
    })
    .addSection({
      title: 'Small table',
      describe: <p>通过size属性来改变表格的大小，有<code>small</code>和<code>large</code>两个选项。</p>,
      content: (
        <Table size="small">
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Colors',
      describe: <p>在TableRow组件中设置color属性可以改变行的背景颜色。</p>,
      content: (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell tag="th">#</TableCell>
              <TableCell tag="th">First</TableCell>
              <TableCell tag="th">Last</TableCell>
              <TableCell tag="th">Handle</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow color="primary">
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow color="success">
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow color="warning">
              <TableCell>3</TableCell>
              <TableCell>Larry</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@twitter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      codeText: getCodeFromString(converter.makeHtml(bstype)),
    })
    .addAPI({
      header: true,
      title: 'Table',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'TableRow',
      content: getTableFromString(converter.makeHtml(rowapi)),
    })
    .addAPI({
      title: 'TableCell',
      content: getTableFromString(converter.makeHtml(cellapi)),
    })
    .render()
}
