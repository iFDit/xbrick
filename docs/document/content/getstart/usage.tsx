import * as React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'xbrick'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { xonokai } from 'react-syntax-highlighter/styles/prism'

export const Usage = () => {
  return (
    <>
      <div className="doc-content-header">
        <h3 style={{fontWeight: 300}}>Usage</h3>
        <div className="sticky-top-content">
          <Nav>
            <NavItem>
              <NavLink href="#quick-start">Quick start</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#live-demo">Live Demo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#compatibility">Next steps</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <Container fluid style={{paddingTop: 20, paddingBottom: 10}}>
        <Row className="doc-content-title">
          <Col><h5><a name="quick-start">Quick start</a></h5></Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12"><p>下面通过一个简单的例子你就能了解xbrick是如何使用的。</p></Col>
          <Col xs="12">
            <SyntaxHighlighter language="javascript" style={xonokai}>
              {simpleExample}
            </SyntaxHighlighter>
          </Col>
        </Row>
        <Row className="doc-content-title">
          <Col><h5><a name="live-demo">Live Demo</a></h5></Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12"><p>可以参照以下CodeSandbox的在线演示。</p></Col>
          <Col xs="12">
            <a>1</a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const simpleExample = `
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'xbrick'

function App() {
  return (
    <Button bstype="success">Hello World</Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
`