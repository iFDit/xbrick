import * as React from 'react'
import { Fade, Jumbotron, Container, Row, Col, Button } from 'xbrick'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { coy } from 'react-syntax-highlighter/styles/prism'
import { Link } from 'react-router-dom'
const logo = require('src/logo.svg')

export const Home = () => {
  const usageText = `
  import React from 'react'
  import { Button } from 'xbrick'
  import 'xbrick/lib/style/index.css'

  const App = () => {
    <Button>Hello World</Button>
  }`
  return (
    <Fade from={0} to={1} className="doc-home">
      <Jumbotron style={{backgroundColor: '#fff'}} fluid>
        <Container fluid>
          <div className="home-banner">
            <Row xs={{justify: 'center'}} className="mt-4">
              <Col xs="12" style={{textAlign: 'center'}} className="mb-5">
                <img src={logo} width="100" height="100"/>
                <h1 className="display-4 text-muted" style={{display: 'inline-block', verticalAlign: 'bottom'}}>
                  xbrick
                </h1>
              </Col>
              <Col xs="12" style={{textAlign: 'center'}} className="mb-5">
                <h3 className="text-muted" style={{fontWeight: 300}}>React-based UI for the web</h3>
              </Col>
            </Row>
            <Row>
              <Col xs="12" style={{textAlign: 'center'}}>
                <Button outline style={{marginRight: 25}} className="banner-btn">
                  <Link to="documents" className="bsprimary">GET STARTED</Link>
                </Button>
                <Button bstype="light" className="banner-btn">
                  <a href="https://github.com/iFDit/xbrick" target="_blank">GitHub</a>
                </Button>
              </Col>
            </Row>
          </div>
          <Row style={{marginTop: 25}}>
            <Col sm="4" className="home-block">
              <h3 className="block-title">安装</h3>
              <p>通过npm来安装xbrick，并在项目中引入CSS。</p>
              <SyntaxHighlighter language="shell" style={coy}>
                $ npm install xbrick
              </SyntaxHighlighter>
              <Button bstype="light" className="block-btn">
                <Link to="documents/getting-started/install">查看安装文档</Link>
              </Button>
            </Col>
            <Col sm="4" className="home-block">
              <h3 className="block-title">使用</h3>
              <p>可以通过xbrick引入组件，同时每个组件都是独立的，可以单独引入。</p>
              <SyntaxHighlighter language="jsx" style={coy}>
                {usageText}
              </SyntaxHighlighter>
              <Button bstype="light" className="block-btn">
                <Link to="documents/components">查看组件文档</Link>
              </Button>
            </Col>
            <Col sm="4" className="home-block">
              <h3 className="block-title">目的</h3>
              <p>提供一套灵活，稳定和简单的基础组件，以便开发人员在此基础上构建更完善的业务组件。</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Fade>
  )
}
