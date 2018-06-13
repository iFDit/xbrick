import * as React from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from 'xbrick'

export const Example = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>detail</Button>
        </CardBody>
      </Card>
      <Card align="center">
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>detail</Button>
        </CardBody>
      </Card>
      <Card align="right">
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>detail</Button>
        </CardBody>
      </Card>
    </>
  )
}

export default Example
