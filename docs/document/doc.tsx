import * as React from 'react'
import { Sidebar } from 'docs/document/sidebar/sidebar'
import { Content } from 'docs/document/content/index'
import { Container, Row, Col, Fade } from 'xbrick'

export const Doc = (props: any = {}) => {
  return (
    <Fade from={0} to={1}>
      <Container fluid>
          <Row style={{height: 2000}}>
            <Col sm="3" md="3" lg="2" xl="2" className="pl-0 pr-0"><Sidebar/></Col>
            <Col sm="9" md="9" lg="10" xl="10"><Content/></Col>
          </Row>
      </Container>
    </Fade>
  )
}
