import * as React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Fade } from 'xbrick'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { xonokai } from 'react-syntax-highlighter/styles/prism'

export const Install = () => {
  return (
    <Fade from={0} to={1}>
      <div className="doc-content-header">
        <h1 style={{fontWeight: 300}}>Installation</h1>
        <div className="sticky-top-content">
          <Nav className="doc-nav">
            <NavItem>
              <NavLink href="#install">NPM packages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#compatibility">Compatibility</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <Container fluid className="doc-content-container">
        <Row className="doc-content-title">
          <Col>
            <a id="install" className="doc-anchor" />
            <h5>NPM packages</h5>
          </Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12"><p>1. 使用npm或者yarn安装xbrick。</p></Col>
          <Col xs="12">
            <SyntaxHighlighter language="javascript" style={xonokai}>
              {installText}
            </SyntaxHighlighter>
          </Col>
          <Col xs="12"><p>2. 安装完成后，通过import直接引入xbrick来使用。</p></Col>
          <Col xs="12">
            <SyntaxHighlighter language="javascript" style={xonokai}>
              {afterInstall}
            </SyntaxHighlighter>
          </Col>
          <Col xs="12"><p>引入样式：</p></Col>
          <Col xs="12">
            <SyntaxHighlighter language="javascript" style={xonokai}>
              {insertCSS}
            </SyntaxHighlighter>
          </Col>
        </Row>
        <Row className="doc-content-title">
          <Col>
            <a id="compatibility" className="doc-anchor" />
            <h5>Compatibility</h5>
          </Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12">
            <p>
              xbrick支持所有现代浏览器。对于低版本的浏览器，需要提供Polyfills支持，如
              <a href="https://github.com/es-shims/es5-shim" className="mr-1 ml-1">es5-shim</a>和
              <a href="https://github.com/paulmillr/es6-shim" className="mr-1 ml-1">es6-shim</a>
            </p>
          </Col>
          <Col xs="12">
            <SyntaxHighlighter language="html" style={xonokai}>
              {compatibilityText}
            </SyntaxHighlighter>
          </Col>
          <Col xs="12">
            <p>
              如果使用Babel进行编译，推荐使用
              <a href="https://babeljs.io/docs/en/babel-polyfill/" className="mr-1 ml-1">babel-polyfill</a>和
              <a href="https://babeljs.io/docs/en/babel-plugin-transform-runtime/" className="mr-1 ml-1">babel-plugin-transform-runtime</a>
              <br />
              注：<a href="https://github.com/ant-design/ant-design/issues/6512" className="mr-1 ml-1">#6512</a>
              避免同时使用babel和shim所引起的问题
            </p>
          </Col>
        </Row>
      </Container>
    </Fade>
  )
}

const installText = `
// yarn
yarn add xbrick

// npm
npm install xbrick --save
`

const insertCSS = `
// in the .js?x file
import 'xbrick/lib/style/index.css'

// or in the .scss file
@import '~xbrick/lib/style/index.scss'
`

const afterInstall = `
import * as React from 'react'
import { Button, Alert } from 'xbrick'
import 'xbrick/lib/style/index.css'

// useing JSX
const myAlert = <Alert>this is a alert</Alert>

// use React.createElement
const myButton = React.createElement(Button, { bstype: 'success' }, 'success')
`

const compatibilityText = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- Polyfills -->
    <!--[if lt IE 10]>
    <script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>
    <![endif]-->
    <script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js"></script>
  </head>
  <body>
  </body>
  <!-- 公用文件 -->
  <script src="/common.js"></script>
  <!-- 入口文件 -->
  <script src="/index.js"></script>
</html>
`