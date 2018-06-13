import * as React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'xbrick'

export const Example = () => {
  return (
    <>
      <Card bstype="primary" outline>
        <CardBody>
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="secondary" outline>
        <CardBody>
          <CardTitle>Secondary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="success" outline>
        <CardBody>
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="danger" outline>
        <CardBody>
          <CardTitle>Danger card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="warning" outline>
        <CardBody>
          <CardTitle>Warning card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="info" outline>
        <CardBody>
          <CardTitle>Info card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="light" outline>
        <CardBody>
          <CardTitle>Light card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card bstype="dark" outline>
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
