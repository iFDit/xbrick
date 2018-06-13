import * as React from 'react'
import { Card, CardBody, CardText, CardTitle, CardLink } from 'xbrick'

export const Example = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardTitle subtitle>subTitle</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.M
        </CardText>
        <CardLink>Card link</CardLink>
        <CardLink>Another link</CardLink>
      </CardBody>
    </Card>
  )
}

export default Example
