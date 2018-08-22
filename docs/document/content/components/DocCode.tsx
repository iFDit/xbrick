import React from 'react'
import { Container, Row, Col, Button , Collapse } from 'xbrick'
const sandbox = require('docs/document/asset/codesandbox.svg')
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { coy } from 'react-syntax-highlighter/styles/prism'
import { getcodesandboxParam } from 'docs/document/content/util'

export class DocCode extends React.Component<any> {
  public state = { open: false, copied: false }

  public toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  public copy = (text: string) => {
    const {copied} = this.state
    if (!copied) {
      const input = document.createElement('textarea')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 1000)
    }
  }

  render () {
    const { codeText = '' } = this.props
    const { open, copied } = this.state
    return (
      <Container fluid style={{marginTop: 10}}>
        <Row className="doc-content-text">
          <Col xs="12" style={{padding: 0, margin: 0}}>
            <Collapse open={open}>
              {() => (
                <Container fluid className="doc-code">
                  <Row xs={{ justify: 'end' }}>
                    <Col xs="3" className="doc-code-toolbar">
                      <form className="doc-codesandbox-form" title="open in codesandbox" action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
                        <input type="hidden" name="parameters" value={`${getcodesandboxParam(codeText)}`} />
                        <input type="submit" value="" style={{backgroundImage: `url(${sandbox})`}} className="doc-codesandbox-submit"/>
                      </form>
                      <Button size="small" bstype="light" title="copy the code" className="btn-copy" onClick={() => this.copy(codeText)}>
                        {copied ? 'copied' : 'copy'}
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{marginTop: -25}}>
                    <Col xs="12">
                      <SyntaxHighlighter language="jsx" style={coy} customStyle={{overflowX: 'auto'}}>
                        {codeText}
                      </SyntaxHighlighter>
                    </Col>
                  </Row>
                </Container>
              )}
            </Collapse>
          </Col>
        </Row>
        <Row className="doc-content-text" style={{marginBottom: 15}}>
          <Col xs="12"  style={{textAlign: 'end'}}>
            <Button
              block
              size="small"
              bstype="light"
              onClick={() => this.toggle()}
              className="doc-view-code-text"
            >
              <span>{`</> ${open ? 'hide' : 'view'} code`}</span>
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}