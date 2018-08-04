import * as React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Fade } from 'xbrick'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { xonokai } from 'react-syntax-highlighter/styles/prism'

export const Usage = () => {
  return (
    <Fade from={0} to={1}>
      <div className="doc-content-header">
        <h1 style={{fontWeight: 300}}>Usage</h1>
        <div className="sticky-top-content">
          <Nav className="doc-nav">
            <NavItem>
              <NavLink href="#quick-start">Quick start</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#live-demo">Live Demo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#next-steps">Next steps</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <Container fluid className="doc-content-container">
        <Row className="doc-content-title">
          <Col>
            <a id="quick-start" className="doc-anchor" />
            <h5>Quick start</h5>
          </Col>
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
          <Col>
            <a id="live-demo" className="doc-anchor" />
            <h5>Live Demo</h5>
          </Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12">
            <p>可以参照以下CodeSandbox的在线演示
            <a href="https://codesandbox.io/s/302j7p81nq" className="mr-1 ml-1">live demo</a>
            </p>
          </Col>
          <Col xs="12">
            <div className="doc-codesandbox-container">
              <iframe
                src="https://codesandbox.io/embed/302j7p81nq?hidenavigation=1&view=preview"
                style={{ width: '100%', height: 350, border: 0, borderRadius: '4px', overflow: 'hidden' }}
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
              />
            </div>
          </Col>
        </Row>
        <Row className="doc-content-title">
          <Col>
            <a id="next-steps" className="doc-anchor" />
            <h5>Next steps</h5>
          </Col>
        </Row>
        <Row className="doc-content-text">
          <Col xs="12"><p>你可以了解更多内容：</p></Col>
          <Col xs="12">
            <ul>
              <li>
                xbrick组件样式是基于Bootstrap的，可以通过
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">Bootstrap</a>
                官方了解更多的样式。
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Fade>
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