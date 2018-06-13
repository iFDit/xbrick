import * as React from 'react'
import { Card, CardBody, CardText, CardTitle, CardDeck } from 'xbrick'

export const Example = () => {
  return (
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle>title</CardTitle>
          <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>title</CardTitle>
          <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default Example
