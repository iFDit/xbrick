import React from 'react'
import classNames from 'classnames'
import { Col } from 'xbrick'
import { Button, ButtonStyles } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import base from 'docs/demo/button/basic.md'
import tag from 'docs/demo/button/custom-tag.md'
import outline from 'docs/demo/button/outline.md'
import size from 'docs/demo/button/size.md'
import block from 'docs/demo/button/block.md'
import active from 'docs/demo/button/active.md'
import disabled from 'docs/demo/button/disabled.md'

// Styles
import style from 'src/buttons/button-styles.md'

// API
import api from 'src/buttons/button.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const { BUTTON, PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING } = ButtonStyles

export function ButtonsContent() {
  return new Content('Buttons')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Button tags', anchor: 'button-tags' })
    .addNav({ text: 'Outline buttons', anchor: 'outline-buttons' })
    .addNav({ text: 'Sizes', anchor: 'sizes' })
    .addNav({ text: 'Block', anchor: 'block' })
    .addNav({ text: 'Active state', anchor: 'active-state' })
    .addNav({ text: 'Disabled state', anchor: 'disabled-state' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Button组件通常用于响应用户点击的行为，并触发相应的逻辑，按钮可以用于对话框，表单和面板中。</p>
          <p>使用：</p>
          <ul>
            <li>使用按钮来完成你想让用户在页面上做出重要的动作，例如：下载，删除，登录和注销等。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>在页面间跳转时，应该使用链接。</li>
            <li>不太重要的动作应该使用类似链接的样式。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <>
          <Button className={`${BUTTON} ${PRIMARY} mr-2`}>primary</Button>
          <Button className={`${BUTTON} ${SECONDARY} mr-2`}>secondary</Button>
          <Button className={`${BUTTON} ${SUCCESS} mr-2`}>success</Button>
          <Button className={`${BUTTON} ${DANGER} mr-2`}>danger</Button>
          <Button className={`${BUTTON} ${WARNING} mr-2`}>warning</Button>
          <Button className={`${BUTTON} ${WARNING} mr-2`}>info</Button>
          <Button bstype="light">light</Button>
          <Button bstype="dark">dark</Button>
          <Button bstype="link">link</Button>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(base)),
    })
    .addSection({
      title: 'Button tags',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Button tag="a" href="">Link</Button>
          </Col>
          <Col xs="auto">
            <Button tag="input" type="button" value="Input" />
          </Col>
          <Col xs="auto">
            <Button tag="input" type="reset" value="Reset" />
          </Col>
          <Col xs="auto">
            <Button tag="input" type="submit" value="Submit" />
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(tag)),
    })
    .addSection({
      title: 'Outline buttons',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Button outline>primary</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="secondary" outline>secondary</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="success" outline>success</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="danger" outline>danger</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="warning" outline>warning</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="info" outline>info</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="light" outline>light</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="dark" outline>dark</Button>
          </Col>
          <Col xs="auto">
            <Button bstype="link" outline>link</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(outline)),
    })
    .addSection({
      title: 'Sizes',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Button size="large">Primary</Button>
          </Col>
          <Col xs="auto">
            <Button size="middle">Primary</Button>
          </Col>
          <Col xs="auto">
            <Button size="small">Primary</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Block',
      describe: '',
      content: (
        <>
          <Col xs="12" style={{marginBottom: 10}}>
            <Button block>Block level button</Button>
          </Col>
          <Col xs="12">
            <Button bstype="secondary" block>Block level button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(block)),
    })
    .addSection({
      title: 'Active state',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Button active>Primary button</Button>
          </Col>
          <Col xs="auto"> 
            <Button bstype="secondary" active>Button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(active)),
    })
    .addSection({
      title: 'Disabled state',
      describe: '',
      content: (
        <>
          <Col xs="auto">
            <Button disabled>Primary button</Button>
          </Col>
          <Col xs="auto"> 
            <Button bstype="secondary" disabled>Secondary button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(disabled)),
    })
    .addStyles({
      header: true,
      title: 'Button',
      content: getTableFromString(converter.makeHtml(style)),
    })
    .addAPI({
      header: true,
      title: 'Button',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .render()
}
