import * as React from 'react'
import { Container, Row, Nav, NavItem, NavLink, Fade, Col } from 'xbrick'
import { AlertLink } from 'xbrick'
import { DocCode } from 'docs/document/content/components/DocCode'
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

import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export class AlertContent extends React.Component {
  render () {
    return (
      <Fade from={0} to={1}>
        <div className="doc-content-header">
        <h1 style={{fontWeight: 300}}>Alerts 警告</h1>
        <div className="sticky-top-content">
          <Nav className="doc-nav">
            <NavItem>
              <NavLink href="#overview">Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#examples">Examples</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#link-color">Link color</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#additional-content">Additional content</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#dismissing">Dismissing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#api">API</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <Container fluid className="doc-content-container">
        {/* -----------------------Overview--------------------- */}
        <Row className="doc-content-title">
          <Col>
            <a id="overview" className="doc-anchor" />
            <h5>Overview</h5>
          </Col>
        </Row>
        {/* Overview content */}
        <Row className="doc-content-text">
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
        </Row>
        {/* end */}

        {/* -----------------------Examples--------------------- */}
        <Row className="doc-content-title">
          <Col>
            <a id="examples" className="doc-anchor" />
            <h5>Examples</h5>
          </Col>
        </Row>
        {/* Examples content */}
        <Row className="doc-content-text">
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
        </Row>
        <DocCode codeText={getCodeFromString(converter.makeHtml(alertBase))} />
        {/* end */}

        {/* ----------------------Link color---------------------- */}
        <Row className="doc-content-title">
          <Col>
            <a id="link-color" className="doc-anchor" />
            <h5>Link color</h5>
          </Col>
        </Row>
        {/* link color content */}
        <Row className="doc-content-text">
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
        </Row>
        <DocCode codeText={getCodeFromString(converter.makeHtml(alertLink))} />
        {/* end */}

        {/* --------------------Additional content------------------------ */}
        <Row className="doc-content-title">
          <Col>
            <a id="additional-content" className="doc-anchor" />
            <h5>Additional content</h5>
          </Col>
        </Row>
        {/* Additional content */}
        <Row className="doc-content-text">
          <Col xs="12">
            <Alert bstype="success">
              <h4>Well done</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </Alert>
          </Col>
        </Row>
        <DocCode codeText={getCodeFromString(converter.makeHtml(additional))} />
        {/* end */}

        {/* ----------------------Dismissing---------------------- */}
        <Row className="doc-content-title">
          <Col>
            <a id="dismissing" className="doc-anchor" />
            <h5>Dismissing</h5>
          </Col>
        </Row>
        {/* link color content */}
        <Row className="doc-content-text">
          <Col xs="12">
            <Alert bstype="warning" closable onClose={() => console.log('click close-button.')} afterClose={() => console.log('I had been closed.')}>
              Warning Alert with dismiss button.
            </Alert>
          </Col>
        </Row>
        <DocCode codeText={getCodeFromString(converter.makeHtml(closable))} />
        {/* end */}

        {/* ----------------------API---------------------- */}
        <Row className="doc-content-title">
          <Col>
            <a id="api" className="doc-anchor" />
            <h5>API</h5>
          </Col>
        </Row>
        {/* link color content */}
        <Row className="doc-content-text">
          <h6>Alert</h6>
          <Col xs="12">
            <div dangerouslySetInnerHTML={{__html: getTableFromString(converter.makeHtml(api))}} className="doc-api-table-container"/>
          </Col>
          <h6>AlertLink</h6>
          <Col xs="12">
            <div dangerouslySetInnerHTML={{__html: getTableFromString(converter.makeHtml(apiLink))}} className="doc-api-table-container"/>
          </Col>
        </Row>
        {/* end */}

      </Container>
    </Fade>
    )
  }
}
