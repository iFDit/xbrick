边框

通过 `color` 和 `outline` 属性修改卡片边框颜色。

````jsx
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Fragment>
    <Card color="primary" outline>
      <CardBody>
        <CardTitle>Primary card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="secondary" outline>
      <CardBody>
        <CardTitle>Secondary card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="success" outline>
      <CardBody>
        <CardTitle>Success card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="danger" outline>
      <CardBody>
        <CardTitle>Danger card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="warning" outline>
      <CardBody>
        <CardTitle>Warning card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="info" outline>
      <CardBody>
        <CardTitle>Info card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="light" outline>
      <CardBody>
        <CardTitle>Light card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
    <Card color="dark" outline>
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