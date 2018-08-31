import React from 'react'
import { Col } from 'xbrick'
import { Button } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import base from 'docs/demo/button/basic.md'
import tag from 'docs/demo/button/custom-tag.md'
import outline from 'docs/demo/button/outline.md'
import size from 'docs/demo/button/size.md'
import block from 'docs/demo/button/block.md'
import active from 'docs/demo/button/active.md'
import disabled from 'docs/demo/button/disabled.md'

// API
import api from 'src/buttons/button.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

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
      describe: <p>通过color属性可以方便的设置不同样式的按钮。</p>,
      content: (
        <>
          <Button className="mr-2">primary</Button>
          <Button color="secondary" className="mr-2">secondary</Button>
          <Button color="success" className="mr-2">success</Button>
          <Button color="danger" className="mr-2">danger</Button>
          <Button color="warning" className="mr-2">warning</Button>
          <Button color="info" className="mr-2">info</Button>
          <Button color="light" className="mr-2">light</Button>
          <Button color="dark" className="mr-2">dark</Button>
          <Button color="link" className="mr-2">link</Button>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(base)),
    })
    .addSection({
      title: 'Button tags',
      describe: <p>tag属性可以改变Button渲染的元素。</p>,
      content: (
        <>
          <Button tag="a" href="#" className="mr-2">Link</Button>
          <Button tag="input" type="button" value="Input" className="mr-2"/>
          <Button tag="input" type="reset" value="Reset" className="mr-2"/>
          <Button tag="input" type="submit" value="Submit" className="mr-2"/>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(tag)),
    })
    .addSection({
      title: 'Outline buttons',
      describe: <p>无背景颜色的按钮</p>,
      content: (
        <>
          <Button outline className="mr-2">primary</Button>
          <Button color="secondary" outline className="mr-2">secondary</Button>
          <Button color="success" outline className="mr-2">success</Button>
          <Button color="danger" outline className="mr-2">danger</Button>
          <Button color="warning" outline className="mr-2">warning</Button>
          <Button color="info" outline className="mr-2">info</Button>
          <Button color="light" outline className="mr-2">light</Button>
          <Button color="dark" outline className="mr-2">dark</Button>
          <Button color="link" outline className="mr-2">link</Button>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(outline)),
    })
    .addSection({
      title: 'Sizes',
      describe: <p>通过size设置Button组件的大小，有large和small。</p>,
      content: (
        <>
          <Button size="large" className="mr-2">Primary</Button>
          <Button size="middle" className="mr-2">Primary</Button>
          <Button size="small" className="mr-2">Primary</Button>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Block',
      describe: <p>设置block属性为<code>true</code>可以展示块级按钮。</p>,
      content: (
        <>
          <Col xs="12" style={{marginBottom: 10}}>
            <Button block>Block level button</Button>
          </Col>
          <Col xs="12">
            <Button color="secondary" block>Block level button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(block)),
    })
    .addSection({
      title: 'Active state',
      describe: <p>active=<code>true</code>将按钮设置为激活状态。</p>,
      content: (
        <>
          <Col xs="auto">
            <Button active>Primary button</Button>
          </Col>
          <Col xs="auto"> 
            <Button color="secondary" active>Button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(active)),
    })
    .addSection({
      title: 'Disabled state',
      describe: <p>disabled=<code>true</code>设置Button为禁用状态。</p>,
      content: (
        <>
          <Col xs="auto">
            <Button disabled>Primary button</Button>
          </Col>
          <Col xs="auto"> 
            <Button color="secondary" disabled>Secondary button</Button>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(disabled)),
    })
    .addAPI({
      header: true,
      title: 'Button',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .render()
}
