背景

通过 `color` 属性设置卡片的背景。

````jsx
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText } from 'xbrick'
import 'xbrick/lib/style/index.css'


ReactDOM.render(
  <Fragment>
    <Card color="primary" inverse>
      <CardBody>
        <CardTitle>Primary card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="secondary" inverse>
      <CardBody>
        <CardTitle>Secondary card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="success" inverse>
      <CardBody>
        <CardTitle>Success card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="danger" inverse>
      <CardBody>
        <CardTitle>Danger card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="warning" inverse>
      <CardBody>
        <CardTitle>Warning card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="info" inverse>
      <CardBody>
        <CardTitle>Info card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="light">
      <CardBody>
        <CardTitle>Light card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="dark" inverse>
      <CardBody>
        <CardTitle>Dark card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
  </Fragment>
, document.getElementById('root'))
````
