import React from 'react'
import { Col } from 'xbrick'
import { AlertLink } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
import { Alert } from 'xbrick/lib/index'
// code text
import alertBase from 'docs/demo/alert/basic.md'
import alertLink from 'docs/demo/alert/link.md'
import additional from 'docs/demo/alert/additional-content.md'
import closable from 'docs/demo/alert/closable.md'

// API
import api from 'src/alert/alert.md'
import apiLink from 'src/alert/alert-link.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function AlertContent() {
  return new Content('Alert 警告')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Link color', anchor: 'link-color' })
    .addNav({ text: 'Additional content', anchor: 'additional-content' })
    .addNav({ text: 'Dismissing', anchor: 'dismissing' })
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
      describe: '',
      content: (
        <>
          <Col xs="12">
            <Alert bstype="primary">
              This is a primary alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="secondary">
              This is a secondary alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="success">
              This is a success alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="danger">
              This is a danger alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="warning">
              This is a warning alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="info">
              This is a info alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="light">
              This is a light alert — check it out!
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="dark">
              This is a dark alert — check it out!
            </Alert>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(alertBase)),
    })
    .addSection({
      title: 'Link color',
      describe: '',
      content: (
        <>
          <Col xs="12">
            <Alert bstype="primary">
              This is a primary alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="secondary">
              This is a secondary alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="success">
              This is a success alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="danger">
              This is a danger alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="warning">
              This is a warning alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="info">
              This is a info alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="light">
              This is a light alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
          <Col xs="12">
            <Alert bstype="dark">
              This is a dark alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
            </Alert>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(alertLink)),
    })
    .addSection({
      title: 'Additional content',
      describe: '',
      content: (
        <Col xs="12">
          <Alert bstype="success">
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
      describe: '',
      content: (
        <Col xs="12">
          <Alert bstype="warning" closable onClose={() => console.log('click close-button.')} afterClose={() => console.log('I had been closed.')}>
            Warning Alert with dismiss button.
          </Alert>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(closable)),
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
