边框

通过 `bstype` 和 `outline` 属性修改卡片边框颜色。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
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
, document.getElementById('root'))
````