import * as React from 'react'
import { Card, CardBody, CardText, CardTitle, Button, CardHeader, CardFooter } from 'xbrick'

export const Example = () => {
  return (
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  )
}

export default Example
