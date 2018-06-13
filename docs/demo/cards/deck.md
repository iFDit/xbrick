面板

使用 `CardDeck` 组合多个卡片，并且每个卡片拥有相同的高度和宽度。

````jsx
import { Card, CardBody, CardTitle, CardText, CardDeck } from 'xbrick'

ReactDOM.render(
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
, rootNode)
````
