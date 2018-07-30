import * as React from 'react'
import Header from 'docs/document/header'
import Sidebar from 'docs/document/sidebar'
import { Container, Row, Col } from 'xbrick'

const Doc = () => {
  return (
    <>
      <Header />
      <Container fluid>
          <Row style={{height: 2000}}>
            <Col sm="3" md="3" lg="2" xl="2" className="pl-0 pr-0"><Sidebar /></Col>
            <Col sm="9" md="9" lg="10" xl="10">Content</Col>
          </Row>
      </Container>
    </>
  )
}

export default Doc
