import React from 'react'
import { Col } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
import { Alert, AlertLink, AlertStyles } from 'xbrick'
// code text
import alertBase from 'docs/demo/alert/basic.md'
import alertLink from 'docs/demo/alert/link.md'
import additional from 'docs/demo/alert/additional-content.md'
import closable from 'docs/demo/alert/closable.md'

// Style
import style from 'src/alert/alert-styles.md'

// API
import api from 'src/alert/alert.md'
import apiLink from 'src/alert/alert-link.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const AlertClose = Alert.Close!
export function AlertContent() {
  return new Content('Alert')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Link color', anchor: 'link-color' })
    .addNav({ text: 'Additional content', anchor: 'additional-content' })
    .addNav({ text: 'Dismissing', anchor: 'dismissing' })
    .addNav({ text: 'Styles', anchor: 'styles' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Alert组件能展示消息（文字或图片）来提醒用户发生了某些重要的变化。</p>
          <p>使用：</p>
          <ul>
            <li>通知用户以便他们能够了解当前系统的状态，并且通常不需要与用户发生交互。包括：错误，警告和更新。</li>
            <li>作为一种验证消息，以提醒用户如何修改，或者提示用户某些操作已经完成。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>在一个长的表单验证中，验证错误的信息应该展示在表单头部，同时还应该在错误的地方提示用户修改。</li>
            <li>当一个操作有可能触发严重后果的时候，应该使用侵入式更强的提示，例如Modal，以便用户确认。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>适用于任何长度的文本的警告。</p>,
      content: (
        <>
          <Col xs="12">
            <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="secondary">
              This is a secondary alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="success">
              This is a success alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="danger">
              This is a danger alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="warning">
              This is a warning alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="info">
              This is a info alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="light">
              This is a light alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="dark">
              This is a dark alert — check it out!
            </Alert>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(alertBase)),
    })
    .addSection({
      title: 'Link color',
      describe: (
        <p>使用<code>AlertLink</code>可以创建自动适应背景颜色的链接。</p>
      ),
      content: (
        <>
          <Col xs="12">
            <Alert>
              This is a primary alert with a{` `}
              <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="secondary">
              This is a secondary alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="success">
              This is a success alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="danger">
              This is a danger alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="warning">
              This is a warning alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="info">
              This is a info alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="light">
              This is a light alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert color="dark">
              This is a dark alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(alertLink)),
    })
    .addSection({
      title: 'Additional content',
      describe: (
        <p><code>Alert</code>还可以包含其他元素，例如标题(<code>{`<h1>`}</code>)， 段落(<code>{`<p>`}</code>)或者分隔符(<code>{`<hr>`}</code>)。</p>
      ),
      content: (
        <Col xs="12">
          <Alert color="success">
            <h4>Well done</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </Alert>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(additional)),
    })
    .addSection({
      title: 'Dismissing',
      describe: (
        <p>可以关闭的<code>Alert</code>，点击右上角关闭警告提示。</p>
      ),
      content: (
        <Col xs="12">
          <Alert color="warning" afterClose={() => console.log('I had been closed.')} className={AlertStyles.DISMISSIBLE}>
            Warning Alert with dismiss button.
            <AlertClose/>
          </Alert>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(closable)),
    })
    .addStyles({
      header: true,
      title: 'Alert styles',
      content: getTableFromString(converter.makeHtml(style)),
    })
    .addAPI({
      header: true,
      title: 'Alert',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'AlertLink',
      content: getTableFromString(converter.makeHtml(apiLink)),
    })
    .render()
}
