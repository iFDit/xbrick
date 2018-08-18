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
import * as showdown from 'showdown'
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
          <p>Table组件可以展示数据集，用户可以对其中的数据进行操作</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
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
      describe: '',
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
      describe: '',
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
      describe: '',
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
      describe: '',
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
      describe: '',
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
      title: 'Bootstrap type',
      describe: '',
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
            <TableRow bstype="primary">
              <TableCell>1</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Otto</TableCell>
              <TableCell>@mdo</TableCell>
            </TableRow>
            <TableRow bstype="success">
              <TableCell>2</TableCell>
              <TableCell>Jacob</TableCell>
              <TableCell>Thornton</TableCell>
              <TableCell>@fat</TableCell>
            </TableRow>
            <TableRow bstype="warning">
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
