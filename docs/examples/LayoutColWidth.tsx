import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>1 of 2</Col>
        <Col xs style={{border: '1px solid #aaa'}}>2 of 2</Col>
      </Row>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>1 of 3</Col>
        <Col xs style={{border: '1px solid #aaa'}}>2 of 3</Col>
        <Col xs style={{border: '1px solid #aaa'}}>3 of 3</Col>
      </Row>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>1 of 3</Col>
        <Col xs="6" style={{border: '1px solid #aaa'}}>2 of 3(wider-6)</Col>
        <Col xs style={{border: '1px solid #aaa'}}>3 of 3</Col>
      </Row>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>1 of 3</Col>
        <Col xs="5" style={{border: '1px solid #aaa'}}>2 of 3(wider-5)</Col>
        <Col xs style={{border: '1px solid #aaa'}}>3 of 3</Col>
      </Row>
      <Row>
        <Col xs lg="2" style={{border: '1px solid #aaa'}}>1 of 3</Col>
        <Col md="auto" style={{border: '1px solid #aaa'}}>Variable width content</Col>
        <Col xs lg="2" style={{border: '1px solid #aaa'}}>3 of 3</Col>
      </Row>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>1 of 3</Col>
        <Col md="auto" style={{border: '1px solid #aaa'}}>Variable width content</Col>
        <Col xs lg="2" style={{border: '1px solid #aaa'}}>3 of 3</Col>
      </Row>
      <Row>
        <Col xs style={{border: '1px solid #aaa'}}>col</Col>
        <Col xs style={{border: '1px solid #aaa'}}>col</Col>
        <Col xs style={{border: '1px solid #aaa'}}>col</Col>
        <Col xs style={{border: '1px solid #aaa'}}>col</Col>
      </Row>
      <Row>
        <Col xs="8" style={{border: '1px solid #aaa'}}>col-8</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>col-4</Col>
      </Row>
      <Row>
        <Col sm="8" style={{border: '1px solid #aaa'}}>col-sm-8</Col>
        <Col sm="4" style={{border: '1px solid #aaa'}}>col-sm-4</Col>
      </Row>
      <Row>
        <Col sm style={{border: '1px solid #aaa'}}>col-sm</Col>
        <Col sm style={{border: '1px solid #aaa'}}>col-sm</Col>
        <Col sm style={{border: '1px solid #aaa'}}>col-sm</Col>
      </Row>
    </Container>
  )
}

export default Example
