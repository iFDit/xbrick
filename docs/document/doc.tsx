import * as React from 'react'
import { Sidebar } from 'docs/document/sidebar/sidebar'
import { Content } from 'docs/document/content/index'
import { Container, Row, Col, Fade } from 'xbrick'
import { Route, Redirect, withRouter } from 'react-router-dom'

export const Doc = withRouter((props: any = {}) => {
  const { match: { path = '' } = {}} = props
  return (
    <Fade from={0} to={1}>
      <Route exact path="/documents" render={() => <Redirect to={`${path}/getting-started`} />}/>
      <Container fluid>
          <Row style={{margin: '0 -15px 0'}} noGutter>
            <Col sm="3" md="3" lg="2" xl="2" className="pl-0 pr-0">
              <Route path={`${path}`} component={Sidebar}/>
            </Col>
            <Col sm="9" md="9" lg="10" xl="10">
              <Route path={`${path}`} component={Content}/>
            </Col>
          </Row>
      </Container>
    </Fade>
  )
})
