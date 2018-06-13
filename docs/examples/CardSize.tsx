import * as React from 'react'
import { Card, CardBody, CardText, CardTitle, Button } from 'xbrick'

export const Example = () => {
  return (
    <>
      <Card className="w-75">
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Detail</Button>
        </CardBody>
      </Card>
      <Card className="w-50">
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Detail</Button>
        </CardBody>
      </Card>
      <Card style={{width: '18rem'}}>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Detail</Button>
        </CardBody>
      </Card>
    </>
  )
}

export default Example
