背景

通过 `bstype` 属性设置卡片的背景。

````jsx
import { Card, CardBody, CardTitle, CardText } from 'xbrick'

ReactDOM.render(
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
, rootNode)
````
