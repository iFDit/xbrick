import * as React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'xbrick'

export const Example = () => {
  return (
    <>
      <Card bstype="primary" inverse>
        <CardBody>
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="secondary" inverse>
        <CardBody>
          <CardTitle>Secondary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="success" inverse>
        <CardBody>
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="danger" inverse>
        <CardBody>
          <CardTitle>Danger card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="warning" inverse>
        <CardBody>
          <CardTitle>Warning card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="info" inverse>
        <CardBody>
          <CardTitle>Info card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="light">
        <CardBody>
          <CardTitle>Light card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="dark" inverse>
        <CardBody>
          <CardTitle>Dark card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default Example
